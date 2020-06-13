package com.ant.emploi.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ant.emploi.entities.Candidat;
import com.ant.emploi.entities.Entreprise;
import com.ant.emploi.model.MessageResponse;
import com.ant.emploi.repositories.EntrepriseRepository;
import com.ant.emploi.repositories.UtilisateurRepository;

@Service
public class EntrepriseService {
	@Autowired
	private EntrepriseRepository entrepriseRepository;
	@Autowired
	private UtilisateurRepository utilisateurRepository;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private JavaMailSender javaMailSender;

	public MessageResponse register(Entreprise entreprise) {

		boolean exist = utilisateurRepository.existsByEmail(entreprise.getEmail());
		if (exist) {
			return new MessageResponse(false, "Email exist déja ! ");
		}
		exist = entrepriseRepository.existsByMatriculeFiscal(entreprise.getMatriculeFiscal());
		if (exist) {
			return new MessageResponse(false, "Matricule fiscale exist déja ! ");
		}

		String cryptedPwd = passwordEncoder.encode(entreprise.getPassword());
		entreprise.setPassword(cryptedPwd);
		entreprise = entrepriseRepository.save(entreprise);

		SimpleMailMessage msg = new SimpleMailMessage();
		msg.setTo(entreprise.getEmail());

		msg.setSubject("Validation compte");
		msg.setText("Bonjour " + entreprise.getNomEntreprise() + " , \n" + "Vous venez de vous inscrire au Khiari Jobs."
				+ " Toute l'équipe de Khiari Jobs vous en remercie! " + "Afin de procéder à l'activation de "
				+ "votre compte, " + "il est nécessaire que nous vérifions " + "que vous êtes bien le détenteur"
				+ " de cette adresse mail. " + "Merci de cliquer sur le lien ci-dessous vous la valider :\n"
				+ "http://localhost:4200/#/authentication/validate/" + entreprise.getId());
		javaMailSender.send(msg);

		return new MessageResponse(true, "Inscription effectuée avec succès ");

	}

	public MessageResponse updateProfil(Entreprise entreprise) {

		boolean exist = utilisateurRepository.existsByEmailAndId(entreprise.getEmail(), entreprise.getId());
		if (!exist) {
			exist = utilisateurRepository.existsByEmail(entreprise.getEmail());
			if (exist) {
				return new MessageResponse(false, "Email exist déja ! ");
			}
		}
		exist = entrepriseRepository.existsByMatriculeFiscalAndId(entreprise.getMatriculeFiscal(), entreprise.getId());
		if (!exist) {
			exist = entrepriseRepository.existsByMatriculeFiscal(entreprise.getMatriculeFiscal());
			if (exist) {
				return new MessageResponse(false, "Matricule fiscale exist déja ! ");
			}
		}

		entrepriseRepository.save(entreprise);

		return new MessageResponse(true, "Compte modifié avec succès ");
	}

	public List<Entreprise> findAll() {
		return entrepriseRepository.findAll();
	}

	public Entreprise findById(Integer id) {
		return entrepriseRepository.findById(id).orElse(null);
	}

}
