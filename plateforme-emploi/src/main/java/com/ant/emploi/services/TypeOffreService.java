package com.ant.emploi.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ant.emploi.entities.TypeOffre;
import com.ant.emploi.model.MessageResponse;
import com.ant.emploi.repositories.TypeOffreRepository;

@Service
public class TypeOffreService {
	@Autowired
	private TypeOffreRepository typeOffreRepository;

	public MessageResponse save(TypeOffre typeOffre) {

		boolean exist = typeOffreRepository.existsByLibelle(typeOffre.getLibelle());
		if (exist) {
			return new MessageResponse(false, "Libellé existe déja !!");
		}
		typeOffreRepository.save(typeOffre);

		return new MessageResponse(true, "Opération effectuée avec succès");

	}

	public MessageResponse update(TypeOffre typeOffre) {

		boolean exist = typeOffreRepository.existsByLibelle(typeOffre.getLibelle());
		if (exist) {
			return new MessageResponse(false, "Libellé existe déja !!");
		}
		typeOffreRepository.save(typeOffre);

		return new MessageResponse(true, "Opération effectuée avec succès");

	}

	public MessageResponse delete(Integer id) {

		boolean exist = typeOffreRepository.existsByIdAndOffresIsNotNull(id);
		if (exist) {
			return new MessageResponse(false, "Type offre affectée a une ou plusieurs offres!! ");
		}
		typeOffreRepository.deleteById(id);
		return new MessageResponse(true, "Opération effectuée avec succès");
	}

	public List<TypeOffre> findAll() {
		return typeOffreRepository.findByParentIsNull();
	}

	public List<TypeOffre> findByParent(Integer id) {
		TypeOffre parent = new TypeOffre();
		parent.setId(id);
		return typeOffreRepository.findByParent(parent);
	}

	public TypeOffre findById(Integer id) {
		// TODO Auto-generated method stub
		return typeOffreRepository.findById(id).orElse(null);
	}
}
