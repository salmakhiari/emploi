package com.ant.emploi.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ant.emploi.entities.Utilisateur;
import com.ant.emploi.model.MessageResponse;
import com.ant.emploi.model.PasswordDto;
import com.ant.emploi.services.UtilisateurService;

@RestController
@RequestMapping("/utilisateur")
@CrossOrigin("*")
public class UtilisateurController {
	@Autowired
	private UtilisateurService utilisateurService;

	@GetMapping("/{email}")
	public Utilisateur findByEmail(@PathVariable String email) {
		return utilisateurService.findByEmail(email);
	}
	
	
	@PatchMapping
	public MessageResponse changePassword(@RequestBody PasswordDto passwordDto) {
	
		return utilisateurService.changePassword(passwordDto);
	}

	@PatchMapping("/validate/{id}")
	public MessageResponse validate(@PathVariable Integer id) {
		return utilisateurService.validateAccount(id);
	}
	
	@PatchMapping("/changeState/{id}")
	public MessageResponse changeState(@PathVariable Integer id) {
		return utilisateurService.changeState(id);
	}
}
