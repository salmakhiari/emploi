package com.ant.emploi.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ant.emploi.entities.Cv;
import com.ant.emploi.entities.Competence;
import com.ant.emploi.model.MessageResponse;
import com.ant.emploi.repositories.CompetenceRepository;

@Service
public class CompetenceService {
	@Autowired
	private CompetenceRepository competenceRepository;

	public MessageResponse save(Competence competence) {

	
		competenceRepository.save(competence);

		return new MessageResponse(true, "Opération effectuée avec succès");

	}

	public MessageResponse update(Competence competence) {

		competenceRepository.save(competence);

		return new MessageResponse(true, "Opération effectuée avec succès");

	}

	public MessageResponse delete(Integer id) {

		competenceRepository.deleteById(id);
		return new MessageResponse(true, "Opération effectuée avec succès");
	}

	public List<Competence> findAll() {
		return competenceRepository.findAll();
	}
	
	public List<Competence> findByCv(Integer id) {
		Cv cv = new Cv();
		cv.setId(id);
		return competenceRepository.findByCv(cv);
	}

	public Competence findById(Integer id) {
		// TODO Auto-generated method stub
		return competenceRepository.findById(id).orElse(null);
	}
}
