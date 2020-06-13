package com.ant.emploi.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ant.emploi.entities.Competence;
import com.ant.emploi.entities.Cv;

public interface CompetenceRepository  extends JpaRepository<Competence, Integer> {

	List<Competence> findByCv(Cv cv);

}
