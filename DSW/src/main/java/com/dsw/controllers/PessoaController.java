package com.dsw.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/persons")
public class PessoaController {
   
	/*chamada no browser: http://localhost:8080/persons?name=Vilson&idade=45*/
	@GetMapping
	public String ola(@RequestParam String name, @RequestParam int idade ) {
		return "Olá " + name + " você tem " + idade + " anos.";
	}
	
	/*chamada no browser: http://localhost:8080/persons/Vilson*/
	@GetMapping("/{name}")
	public String ola(@PathVariable String name) {
		return "Olá " + name ;
	}
	
	
}
