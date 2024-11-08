import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/models/formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-detail-formation',
  templateUrl: './detail-formation.component.html',
  styleUrls: ['./detail-formation.component.css']
})
export class DetailFormationComponent implements OnInit {
 
  formation :Formation[]|undefined;
   curentformation:Formation|undefined;
   formationid: any;
  constructor(private formationService: FormationService ,  private router: Router,@Inject('baseUrl') public baseURL:any){}
   
  ngOnInit(): void {
  
     this.ListeFormation();
  }

  ListeFormation():void{
    this.formationService.getAll().subscribe({
      next:(data)=>{this.formation=data;
        console.log(data);
      },
      error:(e)=>console.error(e)
    })
  }

}
