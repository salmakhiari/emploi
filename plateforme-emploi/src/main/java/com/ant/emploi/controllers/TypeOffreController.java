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

import com.ant.emploi.entities.TypeOffre;
import com.ant.emploi.model.MessageResponse;
import com.ant.emploi.services.TypeOffreService;

@RestController
@RequestMapping("/typeOffre")
@CrossOrigin("*")
public class TypeOffreController {

	@Autowired
	private TypeOffreService typeOffreService;

	@GetMapping
	public List<TypeOffre> findAll() {
		return typeOffreService.findAll();
	}
	@GetMapping("/parent/{id}")
	public List<TypeOffre> findByParent(@PathVariable Integer id) {
		return typeOffreService.findByParent(id);
	}
	@GetMapping("/{id}")
	public TypeOffre findById(@PathVariable Integer id) {
		return typeOffreService.findById(id);
	}

	
	@PostMapping
	public MessageResponse save(@RequestBody TypeOffre typeOffre) {
		return typeOffreService.save(typeOffre);
	}
	@PutMapping
	public MessageResponse update(@RequestBody TypeOffre typeOffre) {
		return typeOffreService.update(typeOffre);
	}
	
	@DeleteMapping("/{id}")
	public MessageResponse delete(@PathVariable Integer id) {
		return typeOffreService.delete(id);
	}
	
	

}
