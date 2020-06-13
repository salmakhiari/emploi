package com.ant.emploi.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.OneToMany;

import lombok.Data;

@Data
@Entity
public class Entreprise extends Utilisateur {

	private String nomEntreprise;
	private String matriculeFiscal;
	@OneToMany(mappedBy = "entreprise")
	private List<Offre> offres;

}
