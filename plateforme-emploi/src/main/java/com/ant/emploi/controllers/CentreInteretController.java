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

import com.ant.emploi.entities.CentreInteret;
import com.ant.emploi.model.MessageResponse;
import com.ant.emploi.services.CentreInteretService;

@RestController
@RequestMapping("/centreInteret")
@CrossOrigin("*")
public class CentreInteretController {

	@Autowired
	private CentreInteretService centreInteretService;

	@GetMapping
	public List<CentreInteret> findAll() {
		return centreInteretService.findAll();
	}

	@GetMapping("/{id}")
	public CentreInteret findById(@PathVariable Integer id) {
		return centreInteretService.findById(id);
	}

	
	@GetMapping("/cv/{id}")
	public List<CentreInteret> findByCv(@PathVariable Integer id) {
		return centreInteretService.findByCv(id);
	}

	
	@PostMapping
	public MessageResponse save(@RequestBody CentreInteret centreInteret) {
		return centreInteretService.save(centreInteret);
	}
	@PutMapping
	public MessageResponse update(@RequestBody CentreInteret centreInteret) {
		return centreInteretService.update(centreInteret);
	}
	
	@DeleteMapping("/{id}")
	public MessageResponse delete(@PathVariable Integer id) {
		return centreInteretService.delete(id);
	}
	
	

}
