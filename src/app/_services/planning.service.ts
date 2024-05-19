import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Planning } from '../_interfaces/planning';


@Injectable({
  providedIn: 'root'
})
export class PlanningService {
  private apiUrl = 'http://localhost:3000/planning';

  constructor(private http: HttpClient) { }
  /*
  getPlannings(): Observable<Planning[]> {
    return this.http.get<Planning[]>(this.apiUrl);
  }

  addPlanning(planning: Planning): Observable<Planning> {
    return this.http.post<Planning>(this.apiUrl, planning);
  }

  deletePlanning(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  */

  // Static data for testing purposes
  private staticPlannings: Planning[] = [
    {
      id: 1,
      employe: { id: 1, nom: 'Doe', prenom: 'John' },
      jour: '2024-05-20',
      service: 'Service A',
      site: 'Site 1',
      activite: 'Activité 1'
    },
    {
      id: 2,
      employe: { id: 2, nom: 'Smith', prenom: 'Jane' },
      jour: '2024-05-21',
      service: 'Service B',
      site: 'Site 2',
      activite: 'Activité 2'
    }
  ];
  // Method to get all planning entries - returns static data for testing
  getPlannings(): Observable<Planning[]> {
    return of(this.staticPlannings); // Use 'of' to create an observable of static data
  }

  // Method to add a new planning entry - adds to static data for testing
  addPlanning(planning: Planning): Observable<Planning> {
    planning.id = this.staticPlannings.length + 1; // Simulate auto-increment ID
    return of(planning); // Return the added planning as an observable
  }

  // Method to delete a planning entry by ID - removes from static data for testing
  deletePlanning(id: number): Observable<void> {
    this.staticPlannings = this.staticPlannings.filter(planning => planning.id !== id);
    return of(undefined); // Return an observable of void
  }
}
