import { Injectable } from '@angular/core';
import { HeuresSupp } from '../_interfaces/HeuresSupp';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeuresSuppService {

  private heuresSuppData: HeuresSupp[] = [
    { codeEmploye: 'E001', employe: 'John Doe', date: '2023-05-01', nbrHeuresSupp: 2 },
    { codeEmploye: 'E002', employe: 'Jane Smith', date: '2023-05-02', nbrHeuresSupp: 3 },
    // Add more static data here
  ];

  getHeuresSupp(): Observable<HeuresSupp[]> {
    return of(this.heuresSuppData);
  }
}
