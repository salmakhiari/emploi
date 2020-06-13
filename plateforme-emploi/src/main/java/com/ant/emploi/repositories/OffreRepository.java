package com.ant.emploi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ant.emploi.entities.Offre;

public interface OffreRepository extends JpaRepository<Offre, Integer> {

}
