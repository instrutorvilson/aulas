package com.aulas.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aulas.entites.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

}
