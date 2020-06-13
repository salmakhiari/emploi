package com.ant.emploi.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;
@Data
@Entity
public class Education {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String nomDiplome;
	private String nomEcole;
	private String lieu;
	@Temporal(TemporalType.DATE)
	private Date dateDebut; 
	@Temporal(TemporalType.DATE)
	private Date dateFin;
	@ManyToOne
	private Cv cv;
}
