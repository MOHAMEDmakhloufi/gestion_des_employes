import { Injectable } from '@angular/core';
import { Filiale } from '../_interfaces/Filiale';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilialeService {

  private filiales: Filiale[] = [
    { codeFiliale: '001', designation: 'Filiale A', societe: 'Société 1' },
    { codeFiliale: '002', designation: 'Filiale B', societe: 'Société 2' },
    // Add more static data here
  ];

  getFiliales(): Observable<Filiale[]> {
    return of(this.filiales);
  }

  addFiliale(filiale: Filiale): Observable<Filiale> {
    this.filiales.push(filiale);
    return of(filiale);
  }

  deleteFiliale(codeFiliale: string): Observable<void> {
    this.filiales = this.filiales.filter(f => f.codeFiliale !== codeFiliale);
    return of(null);
  }
}
