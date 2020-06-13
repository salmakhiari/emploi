package com.ant.emploi.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;
@Data
@Entity
public class Offre {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String titre;
	private String description;
	@Temporal(TemporalType.DATE)
	private Date dateCreation;
	@Temporal(TemporalType.DATE)
	private Date dateExpiration;
	private String experience;

	@ManyToOne
	@JoinColumn(name = "entreprise_id")
	private Entreprise entreprise;
	@ManyToOne
	@JoinColumn(name = "typeOffre_id")
	private TypeOffre typeOffre;
	@ManyToOne
	@JoinColumn(name = "specialite_id")
	private Specialite specialite;
	@OneToMany(mappedBy = "offre")
	private List<Candidature> candidatures;
}
