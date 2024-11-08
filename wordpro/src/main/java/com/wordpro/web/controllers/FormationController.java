package com.wordpro.web.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.wordpro.business.services.FormationService;
import com.wordpro.dao.entite.Formation;

@RestController 
@RequestMapping("api/formation")
public class FormationController {
@Autowired
    private FormationService formationService;

@GetMapping("")
public List <Formation> getallFormation(final Long id){
    return formationService.getALlFormation(null);
}
@GetMapping("/{id}")
public Optional <Formation> getFormation(@PathVariable("id") final Long id){
  Optional <Formation> formation= formationService.getFormationById(id);
  if(formation.isPresent()){
    return formationService.getFormationById(id);
  }else{
    System.out.println("null");
    return null;
  }

}
 @PostMapping("")
    public ResponseEntity<Formation> addFormation(@RequestBody Formation formation) {
        Formation savedFormation = formationService.saveFormation(formation);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedFormation);
    }

  @PutMapping("/{id}")
   public Formation updateFormation(@RequestBody Formation formation,@PathVariable("id") final Long id){
    Optional <Formation> formationUp=formationService.getFormationById(id);
    if(formationUp.isPresent()){
        Formation formationn=formationUp.get();
        if (id!=null){
            formationn.setTitre(formation.getTitre());
            formationn.setPrix(formation.getPrix());
            formationn.setDurree((formation.getDurree()));
            formationn.setDescription(formation.getDescription());
            formationn.setImage(formation.getImage());
        } 
        formationService.saveFormation(formationn);
        return formationn;
    }
    else{
        return null;
    }
  


   }

  @DeleteMapping("/{id}")
  public void DelateFormation(@PathVariable("id") final Long id){
    formationService.DelateFormation(id);
  }
}
