import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Employe } from 'src/app/_interfaces/employe';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  /*
  private baseUrl = 'http://localhost:3000'; // Adjust the base URL as needed

  constructor(private http: HttpClient) { }
  
  // Get all employes
  getEmployes(): Observable<Employe[]> {
    return this.http.get<Employe[]>(`${this.baseUrl}/employe`);
  }

  // Add a new employe
  addEmploye(employe: Employe): Observable<Employe> {
    return this.http.post<Employe>(`${this.baseUrl}/employe`, employe);
  }

  // Delete an employe by ID
  deleteEmploye(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/employe/${id}`);
  }
  */

  private employes: Employe[] = [
    { id: 1, nom: 'Doe', prenom: 'John', role: 'Manager', code_pointeuse:'001' },
    { id: 2, nom: 'Smith', prenom: 'Jane', role: 'Developer', code_pointeuse:'002' },
    { id: 3, nom: 'mak', prenom: 'med', role: 'Developer', code_pointeuse:'001' },
    // Add more static data as needed
  ];
  nb_employes = 10;
  constructor() { }

  // Get all employes
  getEmployes(): Observable<Employe[]> {
    return of(this.employes); // Convert the static array to an observable
  }

  // Add a new employe
  addEmploye(employe: Employe): Observable<Employe> {
    // Generate a unique ID for the new employe
    
    employe.id = ++this.nb_employes;

    // Return the newly added employe
    return of(employe);
  }

  // Delete an employe by ID
  deleteEmploye(id: number): Observable<void> {
    // Find the index of the employe with the given ID
    const index = this.employes.findIndex(e => e.id === id);
    if (index !== -1) {
      // Remove the employe from the static array
      this.employes.splice(index, 1);
    }
    // Return an observable with no value
    return of(null);
  }
}

