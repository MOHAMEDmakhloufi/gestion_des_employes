// src/app/_services/configuration-pointeuse.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ConfigurationPointeuse } from '../_interfaces/configurationPointeuse';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationPointeuseService {
  /*
  private apiUrl = 'http://localhost:3000/pointeuse/configuration';

  constructor(private http: HttpClient) { }

  getConfigurations(): Observable<ConfigurationPointeuse[]> {
    return this.http.get<ConfigurationPointeuse[]>(this.apiUrl);
  }
  */
  private configurations: ConfigurationPointeuse[] = [
    {
      code: '001',
      employe: { id: 1, nom: 'John', prenom: 'Doe', password: 'pass123', empreinte: 'EMP001' }
    },
    {
      code: '002',
      employe: { id: 2, nom: 'Jane', prenom: 'Doe', password: 'pass456', empreinte: 'EMP002' }
    }
  ];

  constructor() { }

  getConfigurations(): Observable<ConfigurationPointeuse[]> {
    return of(this.configurations);
  }

  searchConfigurations(code: string): Observable<ConfigurationPointeuse[]> {
    if (!code) {
      return of(this.configurations);
    }
    const filteredConfigurations = this.configurations.filter(config => config.code.includes(code));
    return of(filteredConfigurations);
  }
}
