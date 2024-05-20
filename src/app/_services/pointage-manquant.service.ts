import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PointageManquant } from '../_interfaces/PointageManquant';

@Injectable({
  providedIn: 'root'
})
export class PointageManquantService {
  private pointagesManquants: PointageManquant[] = [
    { codeEmploye: 'E001', employe: 'John Doe', date: '2023-05-19', pointageManquant: 'entrer', heure: '09:00' },
    { codeEmploye: 'E002', employe: 'Jane Smith', date: '2023-05-19', pointageManquant: 'sortir', heure: '18:00' },
    // Add more static data here
  ];

  getPointagesManquants(): Observable<PointageManquant[]> {
    return of(this.pointagesManquants);
  }

  addPointageManquant(pointageManquant: PointageManquant): Observable<PointageManquant> {
    this.pointagesManquants.push(pointageManquant);
    return of(pointageManquant);
  }

  deletePointageManquant(codeEmploye: string, date: string): Observable<void> {
    this.pointagesManquants = this.pointagesManquants.filter(pm => pm.codeEmploye !== codeEmploye || pm.date !== date);
    return of(null);
  }
}
