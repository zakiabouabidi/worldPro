package com.wordpro.business.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wordpro.dao.entite.Formation;
import com.wordpro.dao.reposotories.FormationRepository;

import lombok.Data;

@Data
@Service
public class FormationService {

    @Autowired 
     FormationRepository formationRepository;

   public Optional<Formation> getFormationById(final Long id){
    return formationRepository.findById(id);
   }

   public List<Formation> getALlFormation(final Long id){
    return formationRepository.findAll();
   }
   
    public Formation saveFormation(Formation formation){
       Formation saveFormation= formationRepository.save(formation);
         return saveFormation;
    }


   public void DelateFormation(final Long id){
    formationRepository.deleteById(id);
   }
}
