package com.ant.emploi;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.ant.emploi.entities.Candidat;
import com.ant.emploi.entities.Cv;
import com.ant.emploi.model.MessageResponse;
import com.ant.emploi.services.CandidatService;
import com.ant.emploi.services.CvService;
import com.ant.emploi.services.SpecialiteService;

@SpringBootApplication
//@EnableAutoConfiguration(exclude = SecurityAutoConfiguration.class)
public class PlateformeEmploiApplication implements CommandLineRunner {

	@Autowired
	private CvService cvService;

	public static void main(String[] args) {
		SpringApplication.run(PlateformeEmploiApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
	}

}
