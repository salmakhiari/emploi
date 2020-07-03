package com.ant.emploi.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ant.emploi.entities.Candidature;
import com.ant.emploi.entities.CandidatureId;
import com.ant.emploi.entities.Cv;
import com.ant.emploi.entities.Offre;

public interface CandidatureRepository  extends JpaRepository<Candidature, CandidatureId>{

	boolean existsByOffreAndCv(Offre offre, Cv cv);

	List<Candidature> findByCv(Cv cv);

	List<Candidature> findByOffre(Offre offre);

}
