package com.cadastro.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import com.cadastro.entities.Product;
import com.cadastro.enumerates.Medidas;
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
	public String saveProduct(@ModelAttribute("product") Product product) {
		product.setUnidadeMedida(Medidas.UNIDADE);
		service.save(product);
		return "redirect:/products"; 
	}
		
	@GetMapping("/products/{id}")
	public String getProduct(@PathVariable("id") long id, Model model) {
		model.addAttribute("product", service.getById(id));
		return "novo"; 
	}
		
	/*thymeleaf não suporta PutMaping and delete Mapping*/
	@GetMapping("/products/excluir/{id}")
	public String deleteProduct(@PathVariable("id") long id) {
		service.delete(id);
		return "redirect:/products"; 
	}
	
}
