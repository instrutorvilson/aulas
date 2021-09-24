package com.agenda.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.agenda.entities.Contact;
import com.agenda.services.ContactService;

@RestController
@RequestMapping(value = "/contacts")
public class ContactController {
    
	@Autowired
	ContactService service;
	
	@GetMapping()
	public ResponseEntity<List<Contact>> getAll(){
		List<Contact> lista = service.getAll();
		return ResponseEntity.ok(lista);
	}
	
	@PostMapping()
	public ResponseEntity<Contact> insert(@RequestBody Contact contact){
		contact = service.insert(contact);
		return ResponseEntity.status(HttpStatus.CREATED).body(contact);
	}
}
