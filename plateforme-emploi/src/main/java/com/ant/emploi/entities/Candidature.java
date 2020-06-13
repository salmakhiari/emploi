package com.ant.emploi.entities;

import java.util.Date;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Data;
@Data
@Entity
public class Candidature {
	@EmbeddedId
	private CandidatureId id;
	@Temporal(TemporalType.TIMESTAMP)
	private Date dateCandidature;
	@ManyToOne
	@JoinColumn(name = "idCv", insertable = false, updatable = false)
	private Cv cv;
	@ManyToOne
	@JoinColumn(name = "idOffre", insertable = false, updatable = false)
	private Offre offre;
}
