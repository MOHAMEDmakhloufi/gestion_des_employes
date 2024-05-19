// formule-mensuel.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormuleMensuel } from '../_interfaces/FormuleMensuel';

@Injectable({
  providedIn: 'root'
})
export class FormuleMensuelService {
  private apiUrl = 'http://localhost:3000/formule_mensuel';

  constructor(private http: HttpClient) { }

  getFormuleMensuel(): Observable<FormuleMensuel> {
    return this.http.get<FormuleMensuel>(this.apiUrl);
  }

  updateFormuleMensuel(formuleMensuel: FormuleMensuel): Observable<FormuleMensuel> {
    return this.http.post<FormuleMensuel>(this.apiUrl, formuleMensuel);
  }
}
