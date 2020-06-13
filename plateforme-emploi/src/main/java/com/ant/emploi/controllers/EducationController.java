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

import com.ant.emploi.entities.Education;
import com.ant.emploi.model.MessageResponse;
import com.ant.emploi.services.EducationService;

@RestController
@RequestMapping("/education")
@CrossOrigin("*")
public class EducationController {

	@Autowired
	private EducationService educationService;

	@GetMapping
	public List<Education> findAll() {
		return educationService.findAll();
	}

	@GetMapping("/{id}")
	public Education findById(@PathVariable Integer id) {
		return educationService.findById(id);
	}

	
	@GetMapping("/cv/{id}")
	public List<Education> findByCv(@PathVariable Integer id) {
		return educationService.findByCv(id);
	}

	
	@PostMapping
	public MessageResponse save(@RequestBody Education education) {
		return educationService.save(education);
	}
	@PutMapping
	public MessageResponse update(@RequestBody Education education) {
		return educationService.update(education);
	}
	
	@DeleteMapping("/{id}")
	public MessageResponse delete(@PathVariable Integer id) {
		return educationService.delete(id);
	}
	
	

}
