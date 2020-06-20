package com.ant.emploi.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.ant.emploi.services.UtilisateurService;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter{

	@Autowired
	private UtilisateurService usersService;
	@Autowired
	private JwtAuthorizationFilter jwtAuthorizationFilter;
	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
	
	auth.userDetailsService(usersService).passwordEncoder(passwordEncoder());
	}
	@Bean
	public PasswordEncoder passwordEncoder() {
	return new BCryptPasswordEncoder();
	}
	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
	return super.authenticationManagerBean();
	}
	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception {
	httpSecurity.cors();
	httpSecurity.csrf().disable();
	httpSecurity.sessionManagement()
	.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
	
	httpSecurity.authorizeRequests().antMatchers("/login","/upload","/utilisateur/validate/**","/register/**").permitAll();
	
	httpSecurity.authorizeRequests().anyRequest().authenticated();
	
	httpSecurity.addFilterBefore(jwtAuthorizationFilter, UsernamePasswordAuthenticationFilter.class);
	}
	
	
}
