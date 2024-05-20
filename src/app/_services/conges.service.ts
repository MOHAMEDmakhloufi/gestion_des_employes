import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Conge {
  codeEmploye: string;
  employe: string;
  dateDu: string;
  dateAu: string;
  dateDeReprise: string;
  casDeConge: string;
}

@Injectable({
  providedIn: 'root'
})
export class CongesService {
  private congesData: Conge[] = [
    { codeEmploye: 'E001', employe: 'John Doe', dateDu: '2023-06-01', dateAu: '2023-06-10', dateDeReprise: '2023-06-11', casDeConge: 'Vacation' },
    { codeEmploye: 'E002', employe: 'Jane Smith', dateDu: '2023-07-01', dateAu: '2023-07-05', dateDeReprise: '2023-07-06', casDeConge: 'Medical' },
    // Add more static data here
  ];

  getConges(): Observable<Conge[]> {
    return of(this.congesData);
  }
}
