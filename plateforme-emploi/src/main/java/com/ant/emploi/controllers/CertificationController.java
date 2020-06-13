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

import com.ant.emploi.entities.Certification;
import com.ant.emploi.model.MessageResponse;
import com.ant.emploi.services.CertificationService;

@RestController
@RequestMapping("/certification")
@CrossOrigin("*")
public class CertificationController {

	@Autowired
	private CertificationService certificationService;

	@GetMapping
	public List<Certification> findAll() {
		return certificationService.findAll();
	}

	@GetMapping("/{id}")
	public Certification findById(@PathVariable Integer id) {
		return certificationService.findById(id);
	}

	
	@GetMapping("/cv/{id}")
	public List<Certification> findByCv(@PathVariable Integer id) {
		return certificationService.findByCv(id);
	}

	
	@PostMapping
	public MessageResponse save(@RequestBody Certification certification) {
		return certificationService.save(certification);
	}
	@PutMapping
	public MessageResponse update(@RequestBody Certification certification) {
		return certificationService.update(certification);
	}
	
	@DeleteMapping("/{id}")
	public MessageResponse delete(@PathVariable Integer id) {
		return certificationService.delete(id);
	}
	
	

}
