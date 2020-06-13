package com.ant.emploi.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ant.emploi.entities.Utilisateur;
import com.ant.emploi.model.MessageResponse;
import com.ant.emploi.model.PasswordDto;
import com.ant.emploi.repositories.UtilisateurRepository;

@Service
public class UtilisateurService implements UserDetailsService {
	@Autowired
	private UtilisateurRepository utilisateurRepository;
	@Autowired
	private PasswordEncoder passwordEncoder;

	public MessageResponse changePassword(PasswordDto passwordDto) {

		Utilisateur user = utilisateurRepository.findById(passwordDto.getId()).orElse(null);
		if (user == null) {
			return new MessageResponse(false, "Utilisateur n'existe pas!!");
		}

		boolean valid = passwordEncoder.matches(passwordDto.getOldPassword(), user.getPassword());

		if (!valid) {
			return new MessageResponse(false, "Ancien mot de passe incorrect!!");
		}

		String cryptedPwd = passwordEncoder.encode(passwordDto.getNewPassword());
		user.setPassword(cryptedPwd);

		utilisateurRepository.save(user);

		return new MessageResponse(true, "Mot de passe modifié avec succès");
	}

	public MessageResponse validateAccount(Integer id) {
		Utilisateur user = utilisateurRepository.findById(id).orElse(null);

		if (user == null) {
			return new MessageResponse(false, "Utilisateur n'existe pas!!");
		}

		user.setEnabled(true);
		utilisateurRepository.save(user);
		return new MessageResponse(true, "Compte validé");
	}

	@Override
	public UserDetails loadUserByUsername(String username) {
		Utilisateur user =null;
		List<Utilisateur> list = utilisateurRepository.findByEmail(username).orElseThrow(
                () -> new UsernameNotFoundException("User Not Found with -> username or email: " + username));;
		if (!list.isEmpty()) {
			user = list.get(0);
		}
//		if(user == null) {
//			throw new UsernameNotFoundException("Utilisateur introuvable");
//		}
		return user;
	
	}

	public Utilisateur findByEmail(String email) {
		Utilisateur user = new Utilisateur();
		List<Utilisateur> list = utilisateurRepository.findByEmail(email).orElse(new ArrayList<>());
		if (!list.isEmpty()) {
			user = list.get(0);
		}
		return user;
	}

	public MessageResponse changeState(Integer id) {

		Utilisateur user = utilisateurRepository.findById(id).orElse(null);
		if (user == null) {
			return new MessageResponse(false, "Utilisateur n'existe pas!!");
		}
		user.setEnabled(!user.isEnabled());
		utilisateurRepository.save(user);
		return new MessageResponse(true, "Opération effectuée avec succès");
	}

}
