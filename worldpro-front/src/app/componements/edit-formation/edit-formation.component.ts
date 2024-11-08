import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/models/formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-edit-formation',
  templateUrl: './edit-formation.component.html',
  styleUrls: ['./edit-formation.component.css']
})
export class EditFormationComponent   implements OnInit {

    formation!: Formation;
  
    constructor(
      private router: Router,
      private formationService: FormationService,
      private route: ActivatedRoute, // Injection de ActivatedRoute
      @Inject('baseURL') public baseURL: any
    ) {}
  
    ngOnInit(): void {
      this.route.paramMap.subscribe((result: any) => { // Déclaration du type pour result
        let id = result.get('id');
       this.formation = new Formation(); // Utiliser le constructeur par défaut
      });
    }
  
    onSubmit() {
      if (this.formation.id == null) {
        this.formationService.addFormation(this.formation)
          .subscribe({
            next: (formation: Formation) => {
              // Redirection ou message de succès
            },
            error: (error) => {
              console.error('Error adding formation:', error);
            }
          });
      } 
    }
  
}
