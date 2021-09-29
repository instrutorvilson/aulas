package com.cadastro.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.cadastro.entities.Product;
import com.cadastro.services.ProductService;

@Controller
public class ProductController {

	@Autowired
	ProductService service;
	
	@GetMapping("/products")
	public String getAll(Model model) {
		model.addAttribute("ListProducts", service.getAll());
		return "products"; 
	}
	
	
	@GetMapping("/products/novo")
	public String newProduto(@ModelAttribute("product") Product product) {
		return "novo"; 
	}
	
	@PostMapping("/products/novo/salvar")
	public String saveProduto(@ModelAttribute("product") Product product) {
		service.save(product);
		return "redirect:/products"; 
	}
	
	
}
