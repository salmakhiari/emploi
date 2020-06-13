package com.ant.emploi.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ant.emploi.entities.Cv;
import com.ant.emploi.entities.Experience;



public interface ExperienceRepository extends JpaRepository<Experience, Integer> {

	List<Experience> findByCv(Cv cv);

}
