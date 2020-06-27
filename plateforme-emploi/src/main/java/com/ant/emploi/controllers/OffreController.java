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

import com.ant.emploi.entities.Offre;
import com.ant.emploi.model.MessageResponse;
import com.ant.emploi.services.OffreService;

@RestController
@RequestMapping("/offre")
@CrossOrigin("*")
public class OffreController {

	@Autowired
	private OffreService offreService;

	@GetMapping("/entreprise/{id}")
	public List<Offre> findByEntreprise(@PathVariable Integer id) {
		return offreService.findByEntreprise(id);
	}
	@GetMapping("/valid")
	public List<Offre> findValidOffre() {
		return offreService.findValidOffre();
	}
	@GetMapping("/{id}")
	public Offre findById(@PathVariable Integer id) {
		return offreService.findById(id);
	}

	
	@PostMapping
	public MessageResponse save(@RequestBody Offre offre) {
		return offreService.save(offre);
	}
	@PutMapping
	public MessageResponse update(@RequestBody Offre offre) {
		return offreService.update(offre);
	}
	
	@DeleteMapping("/{id}")
	public MessageResponse delete(@PathVariable Integer id) {
		return offreService.delete(id);
	}
	
	

}
