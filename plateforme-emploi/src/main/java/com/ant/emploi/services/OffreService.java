package com.ant.emploi.services;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ant.emploi.entities.Entreprise;
import com.ant.emploi.entities.Offre;
import com.ant.emploi.model.MessageResponse;
import com.ant.emploi.repositories.OffreRepository;

@Service
public class OffreService {
	@Autowired
	private OffreRepository offreRepository;

	public MessageResponse save(Offre offre) {

		offreRepository.save(offre);

		return new MessageResponse(true, "Opération effectuée avec succès");
	}

	public MessageResponse update(Offre offre) {

		boolean exist = offreRepository.existsByIdAndCandidaturesIsNotNull(offre.getId());
		if (exist) {
			return new MessageResponse(false, "Offre a un ou plusieurs candidatrues");
		}

		offreRepository.save(offre);

		return new MessageResponse(true, "Opération effectuée avec succès");
	}

	public MessageResponse delete(Integer id) {

		boolean exist = offreRepository.existsByIdAndCandidaturesIsNotNull(id);
		if (exist) {
			return new MessageResponse(false, "Offre a un ou plusieurs candidatrues");
		}

		offreRepository.deleteById(id);

		return new MessageResponse(true, "Opération effectuée avec succès");
	}

	public List<Offre> findByEntreprise(Integer id) {

		Entreprise entreprise = new Entreprise();
		entreprise.setId(id);
		return offreRepository.findByEntreprise(entreprise);
	}

	public List<Offre> findValidOffre() {

		return offreRepository.findByDateExpirationGreaterThanEqual(new Date());
	}

	public Offre findById(Integer id) {
		return offreRepository.findById(id).orElse(null);
	}
}
