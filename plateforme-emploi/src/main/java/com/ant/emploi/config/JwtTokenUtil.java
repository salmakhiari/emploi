package com.ant.emploi.config;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtTokenUtil {
	public static final long JWT_TOKEN_VALIDITY = 5 * 60 * 60 * 1000;
	@Value("${jwt.secret}")
	private String secret;

	public String getUsernameFromToken(String token) {
		
		return getClaimFromToken(token, Claims::getSubject);
	}

	public Date getExpirationDateFromToken(String token) {
		return getClaimFromToken(token, Claims::getExpiration);
	}

	public <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
		final Claims claims = getAllClaimsFromToken(token);
		return claimsResolver.apply(claims);
	}

	private Claims getAllClaimsFromToken(String token) {

		return Jwts.parser().setSigningKey(secret.getBytes()).parseClaimsJws(token).getBody();
	}

	private String doGenerateToken(List<String> claims, String subject) {
		

		String token = "Bearer ";
		token += Jwts.builder().setSubject(subject)
				.claim("roles",claims)
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY)) // in milliseconds
				.signWith(SignatureAlgorithm.HS512, secret.getBytes()).compact();
		
		System.out.println("***********");
		System.out.println(token);
		return token;
	}

//	public Boolean validateToken(String token, UserDetails userDetails) {
//		final String username = getUsernameFromToken(token);
//		return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
//	}

	private Boolean isTokenExpired(String token) {
		final Date expiration = getExpirationDateFromToken(token);
		return expiration.before(new Date());
	}

	public String generateToken(UserDetails userDetails) {
		Map<String, Object> claims = new HashMap<>();
		List<String> roles = new ArrayList<>();
		userDetails.getAuthorities().forEach(r -> {
			roles.add(r.getAuthority());
		});
	
		return doGenerateToken(roles, userDetails.getUsername());
	}
}