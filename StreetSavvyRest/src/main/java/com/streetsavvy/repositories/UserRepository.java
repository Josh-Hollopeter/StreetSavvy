package com.streetsavvy.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.streetsavvy.entities.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	
	User findByUsername(String username);

}
