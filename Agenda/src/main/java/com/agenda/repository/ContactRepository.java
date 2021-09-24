package com.agenda.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agenda.entities.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {

}
