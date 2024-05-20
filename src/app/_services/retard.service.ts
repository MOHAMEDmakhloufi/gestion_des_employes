import { Injectable } from '@angular/core';
import { Retard } from '../_interfaces/Retard';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RetardService {

  private retardsData: Retard[] = [
    { codeEmploye: 'E001', employe: 'John Doe', date: '2023-05-01', tempsRetard: '15 mins' },
    { codeEmploye: 'E002', employe: 'Jane Smith', date: '2023-05-02', tempsRetard: '10 mins' },
    // Add more static data here
  ];

  getRetards(): Observable<Retard[]> {
    return of(this.retardsData);
  }
}
