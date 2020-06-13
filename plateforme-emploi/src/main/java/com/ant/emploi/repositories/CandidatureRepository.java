package com.ant.emploi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ant.emploi.entities.Candidature;
import com.ant.emploi.entities.CandidatureId;

public interface CandidatureRepository  extends JpaRepository<Candidature, CandidatureId>{

}
