package com.ant.emploi.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Entity
public class Cv {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String titre;
	
	@OneToOne
	private Candidat candidat;
	
	@JsonIgnore
	@OneToMany(mappedBy = "cv")
	private List<Langue> langues;
	
	@JsonIgnore
	@OneToMany(mappedBy = "cv")
	private List<Experience> experiences;
	
	@JsonIgnore
	@OneToMany(mappedBy = "cv")
	private List<Education> educations;
	
	@JsonIgnore
	@OneToMany(mappedBy = "cv")
	private List<Certification> certifications;
	
	@JsonIgnore
	@OneToMany(mappedBy = "cv")
	private List<Competence> competences;
	
	@JsonIgnore
	@OneToMany(mappedBy = "cv")
	private List<CentreInteret> centreInterets;

	@JsonIgnore
	@OneToMany(mappedBy = "cv")
	private List<Candidature> candidatures;

}
