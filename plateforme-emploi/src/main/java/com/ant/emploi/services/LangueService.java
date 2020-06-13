package com.ant.emploi.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ant.emploi.entities.Cv;
import com.ant.emploi.entities.Langue;
import com.ant.emploi.model.MessageResponse;
import com.ant.emploi.repositories.LangueRepository;

@Service
public class LangueService {
	@Autowired
	private LangueRepository langueRepository;

	public MessageResponse save(Langue langue) {

	
		langueRepository.save(langue);

		return new MessageResponse(true, "Opération effectuée avec succès");

	}

	public MessageResponse update(Langue langue) {

		langueRepository.save(langue);

		return new MessageResponse(true, "Opération effectuée avec succès");

	}

	public MessageResponse delete(Integer id) {

		langueRepository.deleteById(id);
		return new MessageResponse(true, "Opération effectuée avec succès");
	}

	public List<Langue> findAll() {
		return langueRepository.findAll();
	}
	
	public List<Langue> findByCv(Integer id) {
		Cv cv = new Cv();
		cv.setId(id);
		return langueRepository.findByCv(cv);
	}

	public Langue findById(Integer id) {
		// TODO Auto-generated method stub
		return langueRepository.findById(id).orElse(null);
	}
}
