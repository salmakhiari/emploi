package com.ant.emploi.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ant.emploi.entities.Cv;
import com.ant.emploi.entities.Certification;
import com.ant.emploi.model.MessageResponse;
import com.ant.emploi.repositories.CertificationRepository;

@Service
public class CertificationService {
	@Autowired
	private CertificationRepository certificationRepository;

	public MessageResponse save(Certification certification) {

	
		certificationRepository.save(certification);

		return new MessageResponse(true, "Opération effectuée avec succès");

	}

	public MessageResponse update(Certification certification) {

		certificationRepository.save(certification);

		return new MessageResponse(true, "Opération effectuée avec succès");

	}

	public MessageResponse delete(Integer id) {

		certificationRepository.deleteById(id);
		return new MessageResponse(true, "Opération effectuée avec succès");
	}

	public List<Certification> findAll() {
		return certificationRepository.findAll();
	}
	
	public List<Certification> findByCv(Integer id) {
		Cv cv = new Cv();
		cv.setId(id);
		return certificationRepository.findByCv(cv);
	}

	public Certification findById(Integer id) {
		// TODO Auto-generated method stub
		return certificationRepository.findById(id).orElse(null);
	}
}
