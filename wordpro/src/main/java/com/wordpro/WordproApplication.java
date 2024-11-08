package com.wordpro;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.wordpro.business.services.BusinessService;
import com.wordpro.dao.model.HelloWorld;

@SpringBootApplication
public class WordproApplication implements CommandLineRunner {
   
	@Autowired  
	private BusinessService busniss;
	
	public static void main(String[] args) {
		SpringApplication.run(WordproApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		HelloWorld hw=busniss.getHelloWorld();
		System.out.println(hw + "hhhdd");
	}

}
