// pointage.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Pointage } from '../_interfaces/pointage';
// Adjust the import path

@Injectable({
  providedIn: 'root'
})
export class PointageService {
  /*
  private baseUrl = 'http://localhost:3000'; // Adjust the base URL as needed

  constructor(private http: HttpClient) { }

  // Get all pointages
  getPointages(): Observable<Pointage[]> {
    return this.http.get<Pointage[]>(`${this.baseUrl}/pointages`);
  }

  */
  private pointages: Pointage[] = [
    { id: 1, employe: { id: 1, nom: 'Doe', prenom: 'John', role: 'Manager' }, date: '2024-05-19', entre: '08:00', sortie: '16:00', pause_de: '12:00', pause_a: '12:30', nbre_heures: 8 },
    { id: 2, employe: { id: 2, nom: 'Smith', prenom: 'Jane', role: 'Developer' }, date: '2024-05-20', entre: '09:00', sortie: '17:00', pause_de: '12:30', pause_a: '13:00', nbre_heures: 7.5 },
    // Add more static data as needed
  ];

  constructor() { }

  // Get all pointages
  getPointages(): Observable<Pointage[]> {
    return of(this.pointages); // Convert the static array to an observable
  }
}
