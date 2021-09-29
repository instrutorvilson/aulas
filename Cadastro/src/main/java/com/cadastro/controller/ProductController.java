package com.cadastro.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

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
	
	
}
