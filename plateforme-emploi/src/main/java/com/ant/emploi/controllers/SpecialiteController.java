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

import com.ant.emploi.entities.Specialite;
import com.ant.emploi.model.MessageResponse;
import com.ant.emploi.services.SpecialiteService;

@RestController
@RequestMapping("/specialite")
@CrossOrigin("*")
public class SpecialiteController {

	@Autowired
	private SpecialiteService specialiteService;

	@GetMapping
	public List<Specialite> findAll() {
		return specialiteService.findAll();
	}

	@GetMapping("/{id}")
	public Specialite findById(@PathVariable Integer id) {
		return specialiteService.findById(id);
	}

	
	@PostMapping
	public MessageResponse save(@RequestBody Specialite specialite) {
		return specialiteService.save(specialite);
	}
	@PutMapping
	public MessageResponse update(@RequestBody Specialite specialite) {
		return specialiteService.update(specialite);
	}
	
	@DeleteMapping("/{id}")
	public MessageResponse delete(@PathVariable Integer id) {
		return specialiteService.delete(id);
	}
	
	

}
