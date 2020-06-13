package com.ant.emploi.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ant.emploi.entities.Certification;
import com.ant.emploi.entities.Cv;

public interface CertificationRepository extends JpaRepository<Certification, Integer>{

	List<Certification> findByCv(Cv cv);

}
