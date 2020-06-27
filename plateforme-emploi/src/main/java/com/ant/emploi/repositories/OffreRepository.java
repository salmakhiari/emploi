package com.ant.emploi.repositories;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ant.emploi.entities.Entreprise;
import com.ant.emploi.entities.Offre;

public interface OffreRepository extends JpaRepository<Offre, Integer> {

	boolean existsByIdAndCandidaturesIsNotNull(Integer id);

	List<Offre> findByEntreprise(Entreprise entreprise);
	List<Offre> findByDateExpirationGreaterThanEqual(Date date);

}
