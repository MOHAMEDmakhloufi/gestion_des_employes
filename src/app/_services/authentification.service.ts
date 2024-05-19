import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, map, of, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Employe } from '../_interfaces/employe';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private employeSubject : BehaviorSubject<Employe | null>;
  public employe : Observable<Employe | null>;

  apiUrl = "";

  constructor(
    private router : Router,
    private http : HttpClient
  ) { 
    this.employeSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('employe_')!));
    this.employe = this.employeSubject.asObservable();
  }

  public get employeValue() {
    return this.employeSubject.value;
  }
  
  logIn$(employe:Employe) : Observable<null>{
    localStorage.setItem('employe_', JSON.stringify(employe));
        this.employeSubject.next(employe);
    return of(null);
  };

  logout() {
    localStorage.removeItem('employe_');
    this.employeSubject.next(null);
    this.router.navigate(['/']);
  }
}
