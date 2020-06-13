package com.ant.emploi.exceptions;

import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class GlobalExceptionHandler {
	
	
	@ExceptionHandler(DisabledException.class)
	public ResponseEntity<?> disabledException(DisabledException ex, WebRequest request) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), "Compte Désactivé", request.getDescription(false));
		return new ResponseEntity<>(errorDetails, HttpStatus.UNAUTHORIZED);
	}

	@ExceptionHandler(BadCredentialsException.class)
	public ResponseEntity<?> badCredentialsExcpetion(BadCredentialsException ex, WebRequest request) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), "Merci de vérifier votre email ou mot de passe", request.getDescription(false));
		return new ResponseEntity<>(errorDetails, HttpStatus.UNAUTHORIZED);
	}
	@ExceptionHandler(UsernameNotFoundException.class)
	public ResponseEntity<?> usernameNotFound(UsernameNotFoundException ex, WebRequest request) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), "Email n'existe pas!!", request.getDescription(false));
		return new ResponseEntity<>(errorDetails, HttpStatus.UNAUTHORIZED);
	}
	
	
}

