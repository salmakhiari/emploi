package com.ant.emploi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ant.emploi.entities.Specialite;

public interface SpecialiteRepository extends JpaRepository<Specialite, Integer> {

	boolean existsByLibelle(String libelle);
	boolean existsByIdAndOffresIsNotNull(Integer id);
}
