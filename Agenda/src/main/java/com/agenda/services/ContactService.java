package com.agenda.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agenda.entities.Contact;
import com.agenda.repository.ContactRepository;

@Service
public class ContactService {
	@Autowired
	ContactRepository contactRepository;
	
	public Contact insert(Contact contact) {
		return contactRepository.save(contact);
	}
	
	public List<Contact> getAll(){
		return contactRepository.findAll();
	}

}
