package com.ant.emploi.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ant.emploi.entities.Cv;
import com.ant.emploi.entities.Education;

public interface EducationRepository extends JpaRepository<Education, Integer> {

	List<Education> findByCv(Cv cv);

}
