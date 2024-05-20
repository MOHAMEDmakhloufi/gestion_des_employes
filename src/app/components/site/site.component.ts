import { Component, OnInit } from '@angular/core';
import { Site } from 'src/app/_interfaces/site';
import { SiteService } from 'src/app/_services/site.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
  sites: Site[] = [];
  filteredSites: Site[] = [];
  searchQuery: string = '';
  newSite: Site = { code: '', designation: '', filiale: '', nomSociete: '' };
  showModal: boolean = false;

  constructor(private siteService: SiteService) { }

  ngOnInit(): void {
    this.getSites();
  }

  getSites(): void {
    this.siteService.getSites().subscribe(data => {
      this.sites = data;
      this.filteredSites = data;
    });
  }

  filterTable(): void {
    this.filteredSites = this.sites.filter(entry => 
      entry.nomSociete.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  addSite(): void {
    this.siteService.addSite(this.newSite).subscribe(site => {
      this.sites.push(site);
      this.filterTable();
      this.newSite = { code: '', designation: '', filiale: '', nomSociete: '' };
      this.showModal = false;
    });
  }

  deleteSite(code: string): void {
    this.siteService.deleteSite(code).subscribe(() => {
      this.sites = this.sites.filter(s => s.code !== code);
      this.filterTable();
    });
  }

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }
}
