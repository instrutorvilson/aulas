package com.aulas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

	@PostMapping
	public ResponseEntity<Product> save(@RequestBody Product product){
		Product productInserted = service.save(product);
		return ResponseEntity.ok(productInserted);		
	}
	
	@PutMapping
	public ResponseEntity<Product> update(@RequestBody Product product){
		Product productInserted = service.save(product);
		return ResponseEntity.ok(productInserted);		
	}
	
	@DeleteMapping( value = "/{id}")
	public ResponseEntity<Product> deleteById(@PathVariable Long id){
		service.delete(id);
		return ResponseEntity.ok().build();
	}
}
