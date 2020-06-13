package com.ant.emploi.controllers;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ant.emploi.services.FlickrService;
import com.flickr4java.flickr.FlickrException;

@RestController
@RequestMapping("/upload")
@CrossOrigin("*")
public class UploadController {
	
	@Autowired
	private FlickrService flickrService;
	@PostMapping
	public String upload(@RequestParam("file") MultipartFile file) {
		
		String url= null;
		try {
			url = flickrService.uploadImage(file.getInputStream(), file.getName());
		} catch (FlickrException | IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	return url;	
	}

}
