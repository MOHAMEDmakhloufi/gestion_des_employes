import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PointageJournalier } from '../_interfaces/PointageJournalier';

@Injectable({
  providedIn: 'root'
})
export class PointageJournalierService {

  private pointageJournalierData: PointageJournalier[] = [
    { codeEmploye: 1, employe: 'John Doe', date: '2024-05-01', jours: 1, nombreDesJours: 22 },
    { codeEmploye: 2, employe: 'Jane Smith', date: '2024-05-02', jours: 1, nombreDesJours: 22 },
    // Add more static data here
  ];

  getPointageJournalier(): Observable<PointageJournalier[]> {
    return of(this.pointageJournalierData);
  }
}
