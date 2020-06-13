package com.ant.emploi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ant.emploi.entities.Entreprise;

public interface EntrepriseRepository extends JpaRepository<Entreprise, Integer> {

	boolean existsByMatriculeFiscal(String matriculeFiscal);

	boolean existsByMatriculeFiscalAndId(String matriculeFiscal, Integer id);

}
