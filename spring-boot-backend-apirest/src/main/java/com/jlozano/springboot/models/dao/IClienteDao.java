package com.jlozano.springboot.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.jlozano.springboot.models.entity.Cliente;

public interface IClienteDao extends CrudRepository<Cliente, Long>{
	
	

}
