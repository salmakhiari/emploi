package com.ant.emploi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ant.emploi.entities.TypeOffre;

public interface TypeOffreRepository extends JpaRepository<TypeOffre, Integer> {

	boolean existsByLibelle(String libelle);

	boolean existsByIdAndOffresIsNotNull(Integer id);

}
