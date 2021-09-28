package com.dsw.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/persons")
public class PessoaController {
   
	@GetMapping
	public String ola(@RequestParam String name, @RequestParam int idade ) {
		
		
		return "Olá " + name + " você tem " + idade + " anos.";
	}
	
}
