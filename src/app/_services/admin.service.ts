import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Employe } from '../_interfaces/employe';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  /*
  private apiUrl = 'http://localhost:3000/admin';

  constructor(private http: HttpClient) { }

  getAdmin(): Observable<Employe[]> {
    return this.http.get<Employe[]>(this.apiUrl);
  }

  createAdmin(adminId: number): Observable<Employe> {
    return this.http.post<Employe>(this.apiUrl+"/"+adminId, null);
  }

  deleteAdmin(code: number): Observable<any> {
    const url = `${this.apiUrl}/${code}`;
    return this.http.delete(url);
  }
  */
  private admins: Employe[] = [
    { id: 4, nom: 'John', prenom: 'Doe', role: 'admin' },
    { id: 5, nom: 'Jane', prenom: 'Smith', role: 'admin' },
    // Add more static data as needed for testing
  ];
  private employes: Employe[] = [
    { id: 1, nom: 'Doe', prenom: 'John', role: 'Manager' },
    { id: 2, nom: 'Smith', prenom: 'Jane', role: 'Developer' },
    { id: 3, nom: 'mak', prenom: 'med', role: 'Developer' },
    // Add more static data as needed
  ];
  constructor() { }

  getAdmin(): Observable<Employe[]> {
    return of(this.admins);
  }

  createAdmin(employeId: number): Observable<Employe> {
    // Assuming adminId corresponds to an existing employee in the static data
    const employe = this.employes.find(employe => employe.id == employeId);
    
    if (employe) {
      // If the admin with the specified ID exists, return it
      return of(employe);
    } else {
      // If the admin with the specified ID doesn't exist, return an error or handle as needed
      return of(null);
    }
  }

  deleteAdmin(code: number): Observable<any> {
    const index = this.admins.findIndex(admin => admin.id === code);
    if (index !== -1) {
      this.admins.splice(index, 1);
    }
    // Return some response indicating success or failure
    return of(null);
  }
}
