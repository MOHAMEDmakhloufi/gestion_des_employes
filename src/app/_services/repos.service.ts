// repos.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Repo } from '../_interfaces/repo';


@Injectable({
  providedIn: 'root'
})
export class ReposService {
  /*
  private apiUrl = 'http://localhost:3000/repos';

  constructor(private http: HttpClient) { }

  getRepos(): Observable<Repo[]> {
    return this.http.get<Repo[]>(this.apiUrl);
  }

  addRepo(repo: Repo): Observable<Repo> {
    return this.http.post<Repo>(this.apiUrl, repo);
  }

  deleteRepo(code: string): Observable<any> {
    const url = `${this.apiUrl}/${code}`;
    return this.http.delete(url);
  }
  */
  private repos: Repo[] = [
    { code: '001', designation: 'Repo 1', couleur: 'Red' },
    { code: '002', designation: 'Repo 2', couleur: 'Blue' },
    { code: '003', designation: 'Repo 3', couleur: 'Green' }
  ];

  constructor() { }

  getRepos(): Observable<Repo[]> {
    return of(this.repos);
  }

  addRepo(repo: Repo): Observable<Repo> {
    // For testing purposes, you can push the new repo into the static data array
    this.repos.push(repo);
    return of(repo);
  }

  deleteRepo(code: string): Observable<any> {
    // For testing purposes, you can filter out the repo with the specified code
    this.repos = this.repos.filter(r => r.code !== code);
    return of(null); // Return an observable with null as a placeholder
  }
}
