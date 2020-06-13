package com.ant.emploi.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ant.emploi.entities.Candidat;
import com.ant.emploi.entities.Cv;
import com.ant.emploi.model.MessageResponse;
import com.ant.emploi.repositories.CvRepository;

@Service
public class CvService {
	@Autowired
	private CvRepository cvRepository;

	public MessageResponse save(Cv cv) {

		cvRepository.save(cv);

		return new MessageResponse(true, "Opération effectuée avec succès");

	}

	public List<Cv> findAll() {
		return cvRepository.findAll();
	}

	public Cv findByIdCandidat(Integer id) {
		Candidat candidat = new Candidat();
		candidat.setId(id);
		return cvRepository.findOneByCandidat(candidat);
	}
}
