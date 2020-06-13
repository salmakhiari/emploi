package com.ant.emploi.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ant.emploi.entities.Candidat;
import com.ant.emploi.model.MessageResponse;
import com.ant.emploi.services.CandidatService;

@RestController
@RequestMapping("/candidat")
@CrossOrigin("*")
public class CandidatController {

	@Autowired
	private CandidatService candidatService;

	@GetMapping
	public List<Candidat> findAll() {
		return candidatService.findAll();
	}

	@GetMapping("/{id}")
	public Candidat findById(@PathVariable Integer id) {
		return candidatService.findById(id);
	}

	

	@PutMapping
	public MessageResponse update(@RequestBody Candidat candidat) {
		return candidatService.updateProfil(candidat);
	}

	
	

}
