package com.jlozano.springboot.models.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jlozano.springboot.models.dao.IClienteDao;
import com.jlozano.springboot.models.entity.Cliente;

@Service
public class ClienteServiceImpl implements IClienteService{
	
	@Autowired
	private IClienteDao clienteDao ;
	@Override
	@org.springframework.transaction.annotation.Transactional(readOnly = true)
	public List<Cliente> findAll() {
		
		return (List<Cliente>) clienteDao.findAll();
	}
	@Override
	@org.springframework.transaction.annotation.Transactional(readOnly = true)
	public Cliente findById(Long id) {
		// 
		return clienteDao.findById(id).orElse(null);
	}
	@Override
	@org.springframework.transaction.annotation.Transactional
	public Cliente save(Cliente cliente) {
		// 
		return clienteDao.save(cliente);
	}
	@Override
	@org.springframework.transaction.annotation.Transactional
	public void delete(Long id) {
		// 
		clienteDao.deleteById(id);
	}

}
