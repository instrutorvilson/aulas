package com.cadastro.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_produts")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(length = 40 , nullable = false)
	private String descricao;
	
	@Column(name = "preco_unitario", nullable = false)
	private float preco;
	
	@Column(nullable = false)
	private float estoque;
	
	private char unidadeMedida;

	public Product() {
		super();
	}

	public Product(Long id, String descricao, float preco, float estoque, char unidadeMedida) {
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

	public char getUnidadeMedida() {
		return unidadeMedida;
	}

	public void setUnidadeMedida(char unidadeMedida) {
		this.unidadeMedida = unidadeMedida;
	}
	
	

}
