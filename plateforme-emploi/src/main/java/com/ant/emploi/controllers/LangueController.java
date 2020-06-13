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

import com.ant.emploi.entities.Langue;
import com.ant.emploi.model.MessageResponse;
import com.ant.emploi.services.LangueService;

@RestController
@RequestMapping("/langue")
@CrossOrigin("*")
public class LangueController {

	@Autowired
	private LangueService langueService;

	@GetMapping
	public List<Langue> findAll() {
		return langueService.findAll();
	}

	@GetMapping("/{id}")
	public Langue findById(@PathVariable Integer id) {
		return langueService.findById(id);
	}

	
	@GetMapping("/cv/{id}")
	public List<Langue> findByCv(@PathVariable Integer id) {
		return langueService.findByCv(id);
	}

	
	@PostMapping
	public MessageResponse save(@RequestBody Langue langue) {
		return langueService.save(langue);
	}
	@PutMapping
	public MessageResponse update(@RequestBody Langue langue) {
		return langueService.update(langue);
	}
	
	@DeleteMapping("/{id}")
	public MessageResponse delete(@PathVariable Integer id) {
		return langueService.delete(id);
	}
	
	

}
