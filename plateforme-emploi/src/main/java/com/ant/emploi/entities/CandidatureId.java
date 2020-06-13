package com.ant.emploi.entities;

import java.io.Serializable;

import javax.persistence.Embeddable;

import lombok.Data;
@Data
@Embeddable
public class CandidatureId implements Serializable{

	private Integer idCv;
	private Integer idOffre;
}
