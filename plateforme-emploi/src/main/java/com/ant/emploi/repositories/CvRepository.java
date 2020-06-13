package com.ant.emploi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ant.emploi.entities.Candidat;
import com.ant.emploi.entities.Cv;

public interface CvRepository extends JpaRepository<Cv, Integer>
{

	Cv findOneByCandidat(Candidat candidat);

}
