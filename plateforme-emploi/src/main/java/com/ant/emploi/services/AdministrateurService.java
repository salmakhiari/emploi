package com.ant.emploi.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ant.emploi.entities.Administrateur;
import com.ant.emploi.model.MessageResponse;
import com.ant.emploi.repositories.AdministrateurRepository;
import com.ant.emploi.repositories.UtilisateurRepository;

@Service
public class AdministrateurService {
	@Autowired
	private AdministrateurRepository administrateurRepository;
	@Autowired
	private UtilisateurRepository utilisateurRepository;

	public MessageResponse updateProfil(Administrateur administrateur) {

		boolean exist = utilisateurRepository.existsByEmailAndId(administrateur.getEmail(), administrateur.getId());
		if (!exist) {
			exist = utilisateurRepository.existsByEmail(administrateur.getEmail());
			if (exist) {
				return new MessageResponse(false, "Email exist déja ! ");
			}
		}

		administrateurRepository.save(administrateur);

		return new MessageResponse(true, "Compte modifié avec succès ");
	}

}
