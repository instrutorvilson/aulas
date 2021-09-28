package com.dsw.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dsw.Pessoa;


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
	
	/*chamada no browser: http://localhost:8080/persons/objeto */
	@GetMapping("/objeto")
	public Pessoa getPessoa() {
		return new Pessoa("José da Silva",50,"josé@gmail.com");
	}
	
	/*chamada no browser: http://localhost:8080/objeto/18*/
	@GetMapping("/objeto/{idade}")
	public ResponseEntity<Pessoa> getPessoa(@PathVariable int idade) {
		Pessoa p = new Pessoa("José da Silva",50,"josé@gmail.com");
		if(p.getIdade() > idade)
			return ResponseEntity.ok(p);
		else
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
	}
	
	/*chamada no browser: http://localhost:8080/persons/menores/18*/
	@GetMapping("/menores/{idade}")
	public ResponseEntity<List<Pessoa>> getPessoas(@PathVariable int idade) {
		List<Pessoa> lista = new ArrayList<>();
		lista.add(new Pessoa("José da Silva",10,"josé@gmail.com"));
		lista.add(new Pessoa("João da Silva",50,"joao@gmail.com"));
		lista.add(new Pessoa("Paulo renato",15,"paulo@gmail.com"));
		lista.add(new Pessoa("Maria",22,"maria@gmail.com"));
		lista.add(new Pessoa("Antonio Medeiros",18,"josé@gmail.com"));
		
		List<Pessoa> menores =  new ArrayList<>();
		for(Pessoa p : lista) {
			if (p.getIdade() < idade) {
				menores.add(p);
			}				
		}
		
		return ResponseEntity.ok(menores);
	}
	
	
}
