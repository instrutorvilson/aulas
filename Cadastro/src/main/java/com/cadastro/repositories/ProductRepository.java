package com.cadastro.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cadastro.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

}
