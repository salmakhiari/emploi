package com.ant.emploi.model;

import lombok.Data;

@Data
public class PasswordDto {

	private Integer id;
	private String oldPassword;
	private String newPassword;

}
