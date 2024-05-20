import { Injectable } from '@angular/core';
import { Service } from '../_interfaces/service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private services: Service[] = [
    { code: 'SV001', service: 'Service A', site: 'Site 1' },
    { code: 'SV002', service: 'Service B', site: 'Site 2' },
    // Add more static data here
  ];

  getServices(): Observable<Service[]> {
    return of(this.services);
  }

  addService(service: Service): Observable<Service> {
    this.services.push(service);
    return of(service);
  }

  deleteService(code: string): Observable<void> {
    this.services = this.services.filter(s => s.code !== code);
    return of(null);
  }
}
