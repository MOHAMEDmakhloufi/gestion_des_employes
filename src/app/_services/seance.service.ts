// src/app/_services/seance.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {
  /*
  private apiUrl = 'http://localhost:3000/seance';

  constructor(private http: HttpClient) { }

  getTypeSeance(): Observable<string> {
    return this.http.get<string>(this.apiUrl);
  }

  updateTypeSeance(type: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { type });
  }
  */
  private seanceType: string = 'double_seance';

  constructor() { }

  getTypeSeance(): Observable<string> {
    // Simulating API call to fetch type_seance
    // In this case, just return the static value
    return of(this.seanceType);
  }

  updateTypeSeance(type: string): Observable<any> {
    // Simulating API call to update type_seance
    // In this case, just update the static value
    this.seanceType = type;
    return of(null); // Return an observable of null as there's no actual HTTP request
  }
}
