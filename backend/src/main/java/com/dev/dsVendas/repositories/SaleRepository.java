package com.dev.dsVendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dev.dsVendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
	
}
