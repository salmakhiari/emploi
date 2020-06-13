package com.ant.emploi.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ant.emploi.entities.Cv;
import com.ant.emploi.entities.Experience;
import com.ant.emploi.model.MessageResponse;
import com.ant.emploi.repositories.ExperienceRepository;

@Service
public class ExperienceService {
	@Autowired
	private ExperienceRepository experienceRepository;

	public MessageResponse save(Experience experience) {

	
		experienceRepository.save(experience);

		return new MessageResponse(true, "Opération effectuée avec succès");

	}

	public MessageResponse update(Experience experience) {

		experienceRepository.save(experience);

		return new MessageResponse(true, "Opération effectuée avec succès");

	}

	public MessageResponse delete(Integer id) {

		experienceRepository.deleteById(id);
		return new MessageResponse(true, "Opération effectuée avec succès");
	}

	public List<Experience> findAll() {
		return experienceRepository.findAll();
	}
	
	public List<Experience> findByCv(Integer id) {
		Cv cv = new Cv();
		cv.setId(id);
		return experienceRepository.findByCv(cv);
	}

	public Experience findById(Integer id) {
		// TODO Auto-generated method stub
		return experienceRepository.findById(id).orElse(null);
	}
}
