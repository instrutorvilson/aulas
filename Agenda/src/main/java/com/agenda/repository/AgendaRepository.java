package com.agenda.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.agenda.entities.Contato;

public interface AgendaRepository extends JpaRepository<Contato, Long> {

}
