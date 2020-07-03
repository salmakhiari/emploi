package com.ant.emploi.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ant.emploi.entities.Candidature;
import com.ant.emploi.model.MessageResponse;
import com.ant.emploi.services.CandidatureService;

@RestController
@RequestMapping("/candidature")
@CrossOrigin("*")
public class CandidatureController {
	@Autowired
	private CandidatureService candidatureService;

	@PostMapping
	public MessageResponse save(@RequestBody Candidature candidature) {
		return candidatureService.save(candidature);
	}

	@GetMapping("/{idOffre}/{idCandidat}")
	public boolean isPostuled(@PathVariable Integer idOffre, @PathVariable Integer idCandidat) {
		return candidatureService.isPostuled(idCandidat, idOffre);
	}

	@GetMapping("/offre/{idOffre}")
	public List<Candidature> findByOffre(@PathVariable Integer idOffre) {
		return candidatureService.findByOffre(idOffre);
	}

	@GetMapping("/candidat/{idCandidat}")
	public List<Candidature> findByCandidat(@PathVariable Integer idCandidat) {
		return candidatureService.findByCandidat(idCandidat);
	}
}
