package com.cadastro.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cadastro.entities.Product;
import com.cadastro.repositories.ProductRepository;

@Service
public class ProductService {
  @Autowired
  ProductRepository repository;
  
  public List<Product> getAll(){
	  return repository.findAll();
  }
}
