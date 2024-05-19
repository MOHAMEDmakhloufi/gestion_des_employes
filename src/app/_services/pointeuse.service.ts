// src/app/_services/pointeuse.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Pointeuse } from '../_interfaces/pointeuse';

@Injectable({
  providedIn: 'root'
})
export class PointeuseService {
  /*
  private baseUrl = 'http://localhost:3000/pointeuse';

  constructor(private http: HttpClient) { }

  // Get all pointeuses
  getPointeuses(): Observable<Pointeuse[]> {
    return this.http.get<Pointeuse[]>(this.baseUrl);
  }

  // Add a new pointeuse
  addPointeuse(pointeuse: Pointeuse): Observable<Pointeuse> {
    return this.http.post<Pointeuse>(this.baseUrl, pointeuse);
  }

  // Delete a pointeuse by code
  deletePointeuse(code: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${code}`);
  }

  // Search pointeuses by code and libelle
  searchPointeuses(code: string, libelle: string): Observable<Pointeuse[]> {
    return this.http.get<Pointeuse[]>(`${this.baseUrl}/search?code=${code}&libelle=${libelle}`);
  }
  */
  private pointeuses: Pointeuse[] = [
    {
      code: '001',
      libelle: 'Pointeuse 1',
      ip: '192.168.1.1',
      port: 8080,
      site: 'Site A',
      filiale: 'Filiale A',
      societe: 'Societe A'
    },
    {
      code: '002',
      libelle: 'Pointeuse 2',
      ip: '192.168.1.2',
      port: 8081,
      site: 'Site B',
      filiale: 'Filiale B',
      societe: 'Societe B'
    }
  ];

  constructor() { }

  // Get all pointeuses
  getPointeuses(): Observable<Pointeuse[]> {
    return of(this.pointeuses);
  }

  // Add a new pointeuse
  addPointeuse(pointeuse: Pointeuse): Observable<Pointeuse> {
    
    return of(pointeuse);
  }

  // Delete a pointeuse by code
  deletePointeuse(code: string): Observable<void> {
    
    this.pointeuses = this.pointeuses.filter(p => p.code != code);
   
    return of(null);
  }

  // Search pointeuses by code and libelle
  searchPointeuses(code: string, libelle: string): Observable<Pointeuse[]> {
    const filteredPointeuses = this.pointeuses.filter(p =>
      p.code.includes(code) && p.libelle.includes(libelle)
    );
    return of(filteredPointeuses);
  }
}
