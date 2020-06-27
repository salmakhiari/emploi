package com.ant.emploi.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.ToString;

@Data
@Entity

public class Entreprise extends Utilisateur {

	private String nomEntreprise;
	private String matriculeFiscal;
	@ToString.Exclude
	@JsonIgnore
	@OneToMany(mappedBy = "entreprise")
	private List<Offre> offres;

}
