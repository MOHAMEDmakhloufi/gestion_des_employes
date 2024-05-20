import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Absence {
  codeEmploye: string;
  employe: string;
  date: string;
  dureeAbsence: string;
  dateRetour: string;
}

@Injectable({
  providedIn: 'root'
})
export class AbsencesService {
  private absencesData: Absence[] = [
    { codeEmploye: 'E001', employe: 'John Doe', date: '2023-05-01', dureeAbsence: '3 days', dateRetour: '2023-05-04' },
    { codeEmploye: 'E002', employe: 'Jane Smith', date: '2023-05-02', dureeAbsence: '2 days', dateRetour: '2023-05-04' },
    // Add more static data here
  ];

  getAbsences(): Observable<Absence[]> {
    return of(this.absencesData);
  }
}
