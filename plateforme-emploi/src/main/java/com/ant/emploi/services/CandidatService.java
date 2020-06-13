package com.ant.emploi.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ant.emploi.entities.Candidat;
import com.ant.emploi.entities.Cv;
import com.ant.emploi.model.MessageResponse;
import com.ant.emploi.repositories.CandidatRepository;
import com.ant.emploi.repositories.CvRepository;
import com.ant.emploi.repositories.UtilisateurRepository;

@Service
public class CandidatService {
	@Autowired
	private CandidatRepository candidatRepository;
	@Autowired
	private UtilisateurRepository utilisateurRepository;
	@Autowired
	private CvRepository cvRepository;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private JavaMailSender javaMailSender;

	public MessageResponse register(Candidat candidat) {

		boolean exist = utilisateurRepository.existsByEmail(candidat.getEmail());
		if (exist) {
			return new MessageResponse(false, "Email exist déja ! ");
		}
		exist = candidatRepository.existsByCin(candidat.getCin());
		if (exist) {
			return new MessageResponse(false, "CIN exist déja ! ");
		}

		String cryptedPwd = passwordEncoder.encode(candidat.getPassword());
		candidat.setPassword(cryptedPwd);
		candidat = candidatRepository.save(candidat);
		

		SimpleMailMessage msg = new SimpleMailMessage();
		msg.setTo(candidat.getEmail());

		msg.setSubject("Validation compte");
		msg.setText("Bonjour " + candidat.getNomPrenom() + " , \n" + "Vous venez de vous inscrire au Khiari Jobs."
				+ " Toute l'équipe de Khiari Jobs vous en remercie! " + "Afin de procéder à l'activation de "
				+ "votre compte, " + "il est nécessaire que nous vérifions " + "que vous êtes bien le détenteur"
				+ " de cette adresse mail. " + "Merci de cliquer sur le lien ci-dessous vous la valider :\n"
				+ "http://localhost:4200/#/authentication/validate/" + candidat.getId());
		javaMailSender.send(msg);

		return new MessageResponse(true, "Inscription effectuée avec succès ");

	}

	public MessageResponse updateProfil(Candidat candidat) {

		boolean exist = utilisateurRepository.existsByEmailAndId(candidat.getEmail(), candidat.getId());
		if (!exist) {
			exist = utilisateurRepository.existsByEmail(candidat.getEmail());
			if (exist) {
				return new MessageResponse(false, "Email exist déja ! ");
			}
		}
		exist = candidatRepository.existsByCinAndId(candidat.getCin(), candidat.getId());
		if (!exist) {
			exist = candidatRepository.existsByCin(candidat.getCin());
			if (exist) {
				return new MessageResponse(false, "CIN exist déja ! ");
			}
		}

		candidatRepository.save(candidat);

		return new MessageResponse(true, "Compte modifié avec succès ");
	}

	public List<Candidat> findAll() {
		return candidatRepository.findAll();
	}

	public Candidat findById(Integer id) {
		return candidatRepository.findById(id).orElse(null);
	}

}
