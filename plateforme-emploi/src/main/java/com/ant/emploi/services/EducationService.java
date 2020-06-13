package com.ant.emploi.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ant.emploi.entities.Cv;
import com.ant.emploi.entities.Education;
import com.ant.emploi.model.MessageResponse;
import com.ant.emploi.repositories.EducationRepository;

@Service
public class EducationService {
	@Autowired
	private EducationRepository educationRepository;

	public MessageResponse save(Education education) {

	
		educationRepository.save(education);

		return new MessageResponse(true, "Opération effectuée avec succès");

	}

	public MessageResponse update(Education education) {

		educationRepository.save(education);

		return new MessageResponse(true, "Opération effectuée avec succès");

	}

	public MessageResponse delete(Integer id) {

		educationRepository.deleteById(id);
		return new MessageResponse(true, "Opération effectuée avec succès");
	}

	public List<Education> findAll() {
		return educationRepository.findAll();
	}
	
	public List<Education> findByCv(Integer id) {
		Cv cv = new Cv();
		cv.setId(id);
		return educationRepository.findByCv(cv);
	}

	public Education findById(Integer id) {
		// TODO Auto-generated method stub
		return educationRepository.findById(id).orElse(null);
	}
}
