import { Component, OnInit } from '@angular/core';
import { CongesService } from 'src/app/_services/conges.service';


interface Conge {
  codeEmploye: string;
  employe: string;
  dateDu: string;
  dateAu: string;
  dateDeReprise: string;
  casDeConge: string;
}

@Component({
  selector: 'app-conges',
  templateUrl: './conges.component.html',
  styleUrls: ['./conges.component.css']
})
export class CongesComponent implements OnInit {
  congesData: Conge[] = [];
  filteredConges: Conge[] = [];
  searchQuery: string = '';

  constructor(private congesService: CongesService) { }

  ngOnInit(): void {
    this.getConges();
  }

  getConges(): void {
    this.congesService.getConges().subscribe(data => {
      this.congesData = data;
      this.filteredConges = data;
    });
  }

  filterTable(): void {
    this.filteredConges = this.congesData.filter(entry => 
      entry.employe.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
