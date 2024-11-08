import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from '../models/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient, @Inject('baseUrl') private baseUrl: string) { }
  
  getAll(): Observable<Formation[]> {
    return this.http.get<Formation[]>(this.baseUrl + "formation");
  }

  getById(id: any): Observable<Formation> {
    return this.http.get<Formation>(this.baseUrl + "formation/" + id);
  }

  addFormation(formation: Formation): Observable<Formation> {
    return this.http.post<Formation>(this.baseUrl + "formation", formation);
  }

  updateFormation(formation: Formation): Observable<Formation> {
    return this.http.put<Formation>(this.baseUrl + "formation/" + formation.id, formation);
  }

  deleteFormation(id: any): Observable<any> {
    return this.http.delete(this.baseUrl + "formation/" + id);
  }
}
