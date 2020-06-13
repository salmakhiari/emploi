package com.ant.emploi.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
@Data
@Entity
public class Candidat extends Utilisateur {
	
	private String cin;
	private String nomPrenom;
	@Temporal(TemporalType.DATE)
	private Date dateNaissance;
	@JsonIgnore
	@OneToOne(mappedBy = "candidat")
	private Cv cv;
	
	
	

}
