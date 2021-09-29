package com.cadastro.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.cadastro.enumerates.Medidas;

@Entity
@Table(name = "tb_produts")
public class Product implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(length = 40 , nullable = false)
	private String descricao;
	
	@Column(name = "preco_unitario", nullable = false)
	private float preco;
	
	@Column(nullable = false)
	private float estoque;
	
	private Medidas unidadeMedida;

	public Product() {
		super();
	}

	public Product(Long id, String descricao, float preco, float estoque, Medidas unidadeMedida) {
		super();
		this.id = id;
		this.descricao = descricao;
		this.preco = preco;
		this.estoque = estoque;
		this.unidadeMedida = unidadeMedida;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public float getPreco() {
		return preco;
	}

	public void setPreco(float preco) {
		this.preco = preco;
	}

	public float getEstoque() {
		return estoque;
	}

	public void setEstoque(float estoque) {
		this.estoque = estoque;
	}

	public Medidas getUnidadeMedida() {
		return unidadeMedida;
	}

	public void setUnidadeMedida(Medidas unidadeMedida) {
		this.unidadeMedida = unidadeMedida;
	}
	
	

}
