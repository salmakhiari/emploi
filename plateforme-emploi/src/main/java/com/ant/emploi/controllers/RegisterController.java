package com.ant.emploi.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ant.emploi.entities.Candidat;
import com.ant.emploi.entities.Entreprise;
import com.ant.emploi.model.MessageResponse;
import com.ant.emploi.services.CandidatService;
import com.ant.emploi.services.EntrepriseService;

@RestController
@RequestMapping("/register")
@CrossOrigin("*")
public class RegisterController {
	@Autowired
	private CandidatService candidatService;
	@Autowired
	private EntrepriseService entrepriseService;

	@PostMapping("/candidat")
	public MessageResponse registerCandidat(@RequestBody Candidat candidat) {
		return candidatService.register(candidat);
	}

	@PostMapping("/entreprise")
	public MessageResponse registerEntreprise(@RequestBody Entreprise entreprise) {
		return entrepriseService.register(entreprise);
	}
}
