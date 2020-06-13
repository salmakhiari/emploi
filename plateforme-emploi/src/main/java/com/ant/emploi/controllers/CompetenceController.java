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

import com.ant.emploi.entities.Competence;
import com.ant.emploi.model.MessageResponse;
import com.ant.emploi.services.CompetenceService;

@RestController
@RequestMapping("/competence")
@CrossOrigin("*")
public class CompetenceController {

	@Autowired
	private CompetenceService competenceService;

	@GetMapping
	public List<Competence> findAll() {
		return competenceService.findAll();
	}

	@GetMapping("/{id}")
	public Competence findById(@PathVariable Integer id) {
		return competenceService.findById(id);
	}

	
	@GetMapping("/cv/{id}")
	public List<Competence> findByCv(@PathVariable Integer id) {
		return competenceService.findByCv(id);
	}

	
	@PostMapping
	public MessageResponse save(@RequestBody Competence competence) {
		return competenceService.save(competence);
	}
	@PutMapping
	public MessageResponse update(@RequestBody Competence competence) {
		return competenceService.update(competence);
	}
	
	@DeleteMapping("/{id}")
	public MessageResponse delete(@PathVariable Integer id) {
		return competenceService.delete(id);
	}
	
	

}
