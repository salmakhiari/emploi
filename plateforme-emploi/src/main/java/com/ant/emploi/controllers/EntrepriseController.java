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

import com.ant.emploi.entities.Entreprise;
import com.ant.emploi.model.MessageResponse;
import com.ant.emploi.services.EntrepriseService;

@RestController
@RequestMapping("/entreprise")
@CrossOrigin("*")
public class EntrepriseController {

	@Autowired
	private EntrepriseService entrepriseService;

	@GetMapping
	public List<Entreprise> findAll() {
		return entrepriseService.findAll();
	}

	@GetMapping("/{id}")
	public Entreprise findById(@PathVariable Integer id) {
		return entrepriseService.findById(id);
	}

	
	
	@PutMapping
	public MessageResponse update(@RequestBody Entreprise entreprise) {
		return entrepriseService.updateProfil(entreprise);
	}
	
	
	

}
