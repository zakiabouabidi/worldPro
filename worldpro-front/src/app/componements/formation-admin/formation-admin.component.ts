import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/models/formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-formation-admin',
  templateUrl: './formation-admin.component.html',
  styleUrls: ['./formation-admin.component.css']
})
export class FormationAdminComponent implements OnInit {
  formations!:Formation[];
  formation:Formation|undefined;
  idFormation:any;
 constructor(private formationService: FormationService ,  private router: Router,@Inject('baseUrl') public baseURL:any){}
  
 
 ngOnInit(): void {
   
  this.ListeFormation();
}

ListeFormation():void{
  this.formationService.getAll().subscribe({
    next:(data)=>{this.formations=data;
      console.log(data);
    },
    error:(e)=>console.error(e)
  })
}
delateFormation(id:number){
  this.formationService.deleteFormation(id).subscribe(
   {
     next:(res:any)=>
       { 
         let index=this.formations.findIndex(formation=>formation.id===id);
         if(index !=-1){
           this.formations.splice(index,1);
         }
       }
   } );
 }
 confirmDelete(id: number): void {
  const confirmDelete = confirm("Êtes-vous sûr de vouloir supprimer cette catégorie ?");

  if (confirmDelete) {
    this.delateFormation(id);
  }
}

}
