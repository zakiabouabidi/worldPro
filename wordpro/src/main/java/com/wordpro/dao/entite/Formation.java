package com.wordpro.dao.entite;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="formations")
public class Formation {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id ;
   
   @Column(name="titre_formation")
       private String titre;
       private Long prix ;
       private String durree;
       private String description;
       private String image;

}
