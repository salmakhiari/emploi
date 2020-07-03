package com.ant.emploi.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ant.emploi.entities.Candidat;
import com.ant.emploi.entities.Candidature;
import com.ant.emploi.entities.CandidatureId;
import com.ant.emploi.entities.Cv;
import com.ant.emploi.entities.Offre;
import com.ant.emploi.model.MessageResponse;
import com.ant.emploi.repositories.CandidatureRepository;
import com.ant.emploi.repositories.CvRepository;

@Service
public class CandidatureService {
	@Autowired
	private CandidatureRepository candidatureRepository;
	@Autowired
	private CvRepository cvRepository;

	public MessageResponse save(Candidature candidature) {
		CandidatureId id = new CandidatureId();
		id.setIdCv(candidature.getCv().getId());
		id.setIdOffre(candidature.getOffre().getId());
		candidature.setId(id);
		candidature.setDateCandidature(new Date());
		candidature.setEtat("En attente");
		candidatureRepository.save(candidature);
		return new MessageResponse(true, "Candidature effectuée avec succès");
	}

	public boolean isPostuled(Integer idCandidat, Integer idOffre) {

		Offre offre = new Offre();
		offre.setId(idOffre);
		Candidat candidat = new Candidat();
		candidat.setId(idCandidat);
		Cv cv = cvRepository.findOneByCandidat(candidat);
		boolean exist = candidatureRepository.existsByOffreAndCv(offre, cv);

		return exist;
	}
	
	
	public List<Candidature> findByCandidat(Integer idCandidat) {
		Candidat candidat = new Candidat();
		candidat.setId(idCandidat);
		Cv cv = cvRepository.findOneByCandidat(candidat);
		
		return candidatureRepository.findByCv(cv);
	}
	
	
	public List<Candidature> findByOffre(Integer idOffre) {
		Offre offre = new Offre();
		offre.setId(idOffre);
		
		return candidatureRepository.findByOffre(offre);
	}
}
