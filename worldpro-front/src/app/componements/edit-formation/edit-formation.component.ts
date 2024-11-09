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
  
    constructor(private formationService: FormationService , 
       private router: Router,
       private route: ActivatedRoute,
       @Inject('baseUrl') public baseURL:any){}
    ngOnInit(): void {
      this.route.paramMap.subscribe((result: any) => { // Déclaration du type pour result
        let id = result.get('id');
        if (id !== "-1") this.initFormation(id);
        else this.formation = new Formation(); // Utiliser le constructeur par défaut
     
      });
    }
  
    onSubmit() {
      this.formationService.updateFormation(this.formation)
      .subscribe({
        next: (formation: Formation) => {
          console.log('Formation updated:', formation);
          this.router.navigate(['/dashboard/formation-admin']);
          // Vous pouvez ajouter une redirection ou un message de succès ici
        },
        error: (error) => {
          console.error('Error updating formation:', error);
        }
      });
    }
    initFormation(id: any) {
      this.formationService.getById(id).subscribe({
        next: (formation) => this.formation = formation,
        error: (error) => console.log("Error fetching formation:", error)
      });
    }
    
  
}
