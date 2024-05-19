import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TableauDeBordItem } from '../_interfaces/tableauDeBord';


@Injectable({
  providedIn: 'root'
})
export class TableauDeBordService {
  /*
  private apiUrl = 'http://localhost:3000/tableau_de_bord';

  constructor(private http: HttpClient) { }

  getTableauDeBord(): Observable<TableauDeBordItem[]> {
    return this.http.get<TableauDeBordItem[]>(this.apiUrl);
  }
  */
 // Define static data for testing
 private staticData: TableauDeBordItem[] = [
  { code: '1', employe: { id: 1, nom: 'John', prenom: 'Doe' }, nbre_absences: 2, conges: '5', nbre_de_retards: 1, nbre_heures_supp: 10 },
  { code: '2', employe: { id: 2, nom: 'Jane', prenom: 'Smith' }, nbre_absences: 1, conges: '4', nbre_de_retards: 0, nbre_heures_supp: 8 },
  // Add more static data as needed
];

constructor() { }

getTableauDeBord(): Observable<TableauDeBordItem[]> {
  // Return static data as an observable
  return of(this.staticData);
}
}
