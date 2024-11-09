import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/models/formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  formation: Formation = new Formation(); // Initialiser avec un objet Formation vide
  formationid: any;
  isLoading = false;
  errorMessage = '';

  constructor(
    private formationService: FormationService, 
    private router: Router, 
    private route: ActivatedRoute, 
    @Inject('baseUrl') public baseURL: any
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((result: any) => {
      let id = result.get('id');
      if (id !== "-1") this.initFormation(id);
      else this.formation = new Formation(); // Utiliser le constructeur par défaut
    });
  }

  onSubmit() {
    if (this.formation.id == null || this.formation.id === undefined) {
      // Cas d'ajout d'une nouvelle formation
      this.formationService.addFormation(this.formation)
        .subscribe({
          next: (formation: Formation) => {
            console.log('Formation ajouter:', formation);
            this.router.navigate(['/dashboard/formation-admin']);
            // Vous pouvez ajouter une redirection ou un message de succès ici
          },
          error: (error) => {
            console.error('Error adding formation:', error);
          }
        });
    } 

   
  }

  
  initFormation(id: any) {
    this.formationService.getById(id).subscribe({
      next: (formation) => this.formation = formation,
      error: (error) => console.log("Error fetching formation:", error)
    });
}
}

