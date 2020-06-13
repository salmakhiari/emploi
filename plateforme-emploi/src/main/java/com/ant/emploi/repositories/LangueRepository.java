package com.ant.emploi.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ant.emploi.entities.Cv;
import com.ant.emploi.entities.Langue;

public interface LangueRepository extends JpaRepository<Langue, Integer> {

	List<Langue> findByCv(Cv cv);

}
