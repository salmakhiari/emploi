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

import com.ant.emploi.entities.Experience;
import com.ant.emploi.model.MessageResponse;
import com.ant.emploi.services.ExperienceService;

@RestController
@RequestMapping("/experience")
@CrossOrigin("*")
public class ExperienceController {

	@Autowired
	private ExperienceService experienceService;

	@GetMapping
	public List<Experience> findAll() {
		return experienceService.findAll();
	}

	@GetMapping("/{id}")
	public Experience findById(@PathVariable Integer id) {
		return experienceService.findById(id);
	}

	
	@GetMapping("/cv/{id}")
	public List<Experience> findByCv(@PathVariable Integer id) {
		return experienceService.findByCv(id);
	}

	
	@PostMapping
	public MessageResponse save(@RequestBody Experience experience) {
		return experienceService.save(experience);
	}
	@PutMapping
	public MessageResponse update(@RequestBody Experience experience) {
		return experienceService.update(experience);
	}
	
	@DeleteMapping("/{id}")
	public MessageResponse delete(@PathVariable Integer id) {
		return experienceService.delete(id);
	}
	
	

}
