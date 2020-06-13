package com.ant.emploi.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ant.emploi.entities.Utilisateur;

public interface UtilisateurRepository extends JpaRepository<Utilisateur, Integer> {

	boolean existsByEmail(String email);

	boolean existsByEmailAndId(String email, Integer id);

	Optional<List<Utilisateur>> findByEmail(String email);

}
