package com.ant.emploi.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ant.emploi.entities.Specialite;
import com.ant.emploi.model.MessageResponse;
import com.ant.emploi.repositories.SpecialiteRepository;

@Service
public class SpecialiteService {
	@Autowired
	private SpecialiteRepository specialiteRepository;

	public MessageResponse save(Specialite specialite) {

		boolean exist = specialiteRepository.existsByLibelle(specialite.getLibelle());
		if (exist) {
			return new MessageResponse(false, "Libellé existe déja !!");
		}
		specialiteRepository.save(specialite);

		return new MessageResponse(true, "Opération effectuée avec succès");

	}

	public MessageResponse update(Specialite specialite) {

		boolean exist = specialiteRepository.existsByLibelle(specialite.getLibelle());
		if (exist) {
			return new MessageResponse(false, "Libellé existe déja !!");
		}
		specialiteRepository.save(specialite);

		return new MessageResponse(true, "Opération effectuée avec succès");

	}

	public MessageResponse delete(Integer id) {

		boolean exist = specialiteRepository.existsByIdAndOffresIsNotNull(id);
		if (exist) {
			return new MessageResponse(false, "Spécialité affectée a une ou plusieurs offres!! ");
		}
		specialiteRepository.deleteById(id);
		return new MessageResponse(true, "Opération effectuée avec succès");
	}

	public List<Specialite> findAll() {
		return specialiteRepository.findAll();
	}

	public Specialite findById(Integer id) {
		// TODO Auto-generated method stub
		return specialiteRepository.findById(id).orElse(null);
	}
}
