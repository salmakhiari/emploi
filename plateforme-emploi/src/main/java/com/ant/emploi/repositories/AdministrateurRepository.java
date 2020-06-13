package com.ant.emploi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ant.emploi.entities.Administrateur;

public interface AdministrateurRepository extends JpaRepository<Administrateur, Integer> {

}
