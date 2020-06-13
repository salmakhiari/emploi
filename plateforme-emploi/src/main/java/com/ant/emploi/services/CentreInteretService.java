package com.ant.emploi.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ant.emploi.entities.Cv;
import com.ant.emploi.entities.CentreInteret;
import com.ant.emploi.model.MessageResponse;
import com.ant.emploi.repositories.CentreInteretRepository;

@Service
public class CentreInteretService {
	@Autowired
	private CentreInteretRepository centreInteretRepository;

	public MessageResponse save(CentreInteret centreInteret) {

	
		centreInteretRepository.save(centreInteret);

		return new MessageResponse(true, "Opération effectuée avec succès");

	}

	public MessageResponse update(CentreInteret centreInteret) {

		centreInteretRepository.save(centreInteret);

		return new MessageResponse(true, "Opération effectuée avec succès");

	}

	public MessageResponse delete(Integer id) {

		centreInteretRepository.deleteById(id);
		return new MessageResponse(true, "Opération effectuée avec succès");
	}

	public List<CentreInteret> findAll() {
		return centreInteretRepository.findAll();
	}
	
	public List<CentreInteret> findByCv(Integer id) {
		Cv cv = new Cv();
		cv.setId(id);
		return centreInteretRepository.findByCv(cv);
	}

	public CentreInteret findById(Integer id) {
		// TODO Auto-generated method stub
		return centreInteretRepository.findById(id).orElse(null);
	}
}
