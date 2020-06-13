package com.ant.emploi.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ant.emploi.entities.Utilisateur;
import com.ant.emploi.model.JwtResponse;
import com.ant.emploi.services.UtilisateurService;

@RestController
@RequestMapping("/login")
@CrossOrigin("*")
public class LoginController {

	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private JwtTokenUtil jwtTokenUtil;
	@Autowired
	private UtilisateurService usersService;

	@PostMapping
	public JwtResponse createAuthenticationToken(@RequestBody Utilisateur user) throws Exception {

		authenticate(user.getEmail(), user.getPassword());
		final Utilisateur userDetails = (Utilisateur) usersService.loadUserByUsername(user.getEmail());
		final String token = jwtTokenUtil.generateToken(userDetails);
		return new JwtResponse(token, userDetails);
	}

	private void authenticate(String username, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (UsernameNotFoundException e) {
			throw new Exception("INVALID_EMAIL", e);

		
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);

		}
	}
}
