import { Component, Inject, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators'; // Importation de l'opérateur 'filter'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements   OnInit {
  isDashboardRoute: boolean = false;

  constructor(private router: Router, @Inject('baseUrl') public baseURL: any) {}

  ngOnInit(): void {
    // Met à jour `isDashboardRoute` lorsque la navigation change
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd)) // Utiliser un type de garde
      .subscribe((event: NavigationEnd) => {
        this.isDashboardRoute = event.url.startsWith('/dashboard');
      });
  }
}