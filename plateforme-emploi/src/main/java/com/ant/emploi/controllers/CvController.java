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

import com.ant.emploi.entities.Cv;
import com.ant.emploi.model.MessageResponse;
import com.ant.emploi.services.CvService;

@RestController
@RequestMapping("/cv")
@CrossOrigin("*")
public class CvController {

	@Autowired
	private CvService cvService;

	

	@GetMapping("/{id}")
	public Cv findById(@PathVariable Integer id) {
		return cvService.findByIdCandidat(id);
	}

	
	@PostMapping
	public MessageResponse save(@RequestBody Cv cv) {
		return cvService.save(cv);
	}

	
	

}
