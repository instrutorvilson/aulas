package com.aulas.entites;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_produtos")
public class Produto implements Serializable {
 	private static final long serialVersionUID = 1L;
 	
 	@Id
 	@GeneratedValue( strategy = GenerationType.IDENTITY)
	private Long id;
 	@Column(length = 50)
    private String descricao;
 	@Column(precision = 2)
    private float preco;
 	@Column(precision = 2)
    private float estoque;
    
	public Produto() {
		
	}

	public Produto(Long id, String descricao, float preco, float estoque) {
		this.id = id;
		this.descricao = descricao;
		this.preco = preco;
		this.estoque = estoque;
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
		
    
    
}
