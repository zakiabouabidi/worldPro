package com.wordpro.dao.reposotories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wordpro.dao.entite.Formation;

@Repository
public interface FormationRepository extends JpaRepository<Formation,Long>  {

}
