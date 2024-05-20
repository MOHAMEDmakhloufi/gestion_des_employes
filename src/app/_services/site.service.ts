import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Site } from '../_interfaces/site';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  private sites: Site[] = [
    { code: 'S001', designation: 'Site A', filiale: 'Filiale 1', nomSociete: 'Société 1' },
    { code: 'S002', designation: 'Site B', filiale: 'Filiale 2', nomSociete: 'Société 2' },
    // Add more static data here
  ];

  getSites(): Observable<Site[]> {
    return of(this.sites);
  }

  addSite(site: Site): Observable<Site> {
    this.sites.push(site);
    return of(site);
  }

  deleteSite(code: string): Observable<void> {
    this.sites = this.sites.filter(s => s.code !== code);
    return of(null);
  }
}
