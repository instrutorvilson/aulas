package com.aulas.entites;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_products")
public class Product implements Serializable {
 	private static final long serialVersionUID = 1L;
 	
 	@Id
 	@GeneratedValue( strategy = GenerationType.IDENTITY)
	private Long id;
 	@Column(length = 50)
    private String description;
 	@Column(precision = 2)
    private float price;
 	@Column(precision = 2)
    private float inventory;
    
	public Product() {
		
	}

	public Product(Long id, String description, float price, float inventory) {
		super();
		this.id = id;
		this.description = description;
		this.price = price;
		this.inventory = inventory;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public float getInventory() {
		return inventory;
	}

	public void setInventory(float inventory) {
		this.inventory = inventory;
	}

	
    
}
