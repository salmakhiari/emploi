package com.ant.emploi.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ant.emploi.entities.CentreInteret;
import com.ant.emploi.entities.Cv;

public interface CentreInteretRepository extends JpaRepository<CentreInteret, Integer>{

	List<CentreInteret> findByCv(Cv cv);

}
