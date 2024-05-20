import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/_interfaces/service';
import { ServiceService } from 'src/app/_services/service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  services: Service[] = [];
  filteredServices: Service[] = [];
  searchQuery: string = '';
  newService: Service = { code: '', service: '', site: '' };
  showModal: boolean = false;

  constructor(private serviceService: ServiceService) { }

  ngOnInit(): void {
    this.getServices();
  }

  getServices(): void {
    this.serviceService.getServices().subscribe(data => {
      this.services = data;
      this.filteredServices = data;
    });
  }

  filterTable(): void {
    this.filteredServices = this.services.filter(entry => 
      entry.site.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  addService(): void {
    this.serviceService.addService(this.newService).subscribe(service => {
      this.services.push(service);
      this.filterTable();
      this.newService = { code: '', service: '', site: '' };
      this.showModal = false;
    });
  }

  deleteService(code: string): void {
    this.serviceService.deleteService(code).subscribe(() => {
      this.services = this.services.filter(s => s.code !== code);
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
