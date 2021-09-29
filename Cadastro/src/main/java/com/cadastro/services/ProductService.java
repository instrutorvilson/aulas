package com.cadastro.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cadastro.entities.Product;
import com.cadastro.repositories.ProductRepository;

@Service
@Transactional
public class ProductService {
  @Autowired
  ProductRepository repository;
  
  public List<Product> getAll(){
	  return repository.findAll();
  }
  
  public void save(Product product) {
	  repository.save(product);
  }
  
  public Product getById(Long id) {
	  Optional<Product> product = repository.findById(id);
      if(product.isEmpty()) {
    	  throw new IllegalArgumentException("Produto não existe.");
      }
	  return product.get();		  
  }
  
  public void delete(Long id) {
	  Optional<Product> product = repository.findById(id);
      if(product.isEmpty()) {
    	  throw new IllegalArgumentException("Produto não existe.");
      }
	  repository.deleteById(id);	  
  }
}
