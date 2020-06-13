package com.ant.emploi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ant.emploi.entities.Candidat;

public interface CandidatRepository extends JpaRepository<Candidat, Integer>{

	boolean existsByCin(String cin);

	boolean existsByCinAndId(String cin, Integer id);

}
