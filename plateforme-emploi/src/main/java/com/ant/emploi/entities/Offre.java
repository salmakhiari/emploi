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

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
@Data
@Entity
public class Offre {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String titre;
	private String description;
	@JsonFormat(pattern = "yyyy-MM-dd", timezone="CET")
	private Date dateCreation;
	@JsonFormat(pattern = "yyyy-MM-dd", timezone="CET")
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
	@JsonIgnore
	@OneToMany(mappedBy = "offre")
	private List<Candidature> candidatures;
}
