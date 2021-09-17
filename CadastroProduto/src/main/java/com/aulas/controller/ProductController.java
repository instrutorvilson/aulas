package com.aulas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aulas.entites.Product;
import com.aulas.services.ProductService;

@RestController
@RequestMapping(value = "/products")
public class ProductController {
	
	@Autowired
	ProductService service;
	
	@GetMapping( value = "/{id}")
	public ResponseEntity<Product> findById(@PathVariable Long id){
		Product product = service.findById(id);
		return ResponseEntity.ok(product);
	}
	
	
	@GetMapping()
	public ResponseEntity<List<Product>> findAll(){
	  List<Product> lista = service.findAll();
	  return ResponseEntity.ok().body(lista);
	}

}
