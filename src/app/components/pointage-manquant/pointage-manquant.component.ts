import { Component, OnInit } from '@angular/core';
import { PointageManquant } from 'src/app/_interfaces/PointageManquant';
import { PointageManquantService } from 'src/app/_services/pointage-manquant.service';

@Component({
  selector: 'app-pointage-manquant',
  templateUrl: './pointage-manquant.component.html',
  styleUrls: ['./pointage-manquant.component.css']
})
export class PointageManquantComponent implements OnInit {
  pointagesManquants: PointageManquant[] = [];
  filteredPointagesManquants: PointageManquant[] = [];
  searchQuery: string = '';
  newPointageManquant: PointageManquant = { codeEmploye: '', employe: '', date: '', pointageManquant: 'entrer', heure: '' };
  showModal: boolean = false;

  pointageOptions = ['entrer', 'sortir', 'apres pause', 'avant pause'];

  constructor(private pointageManquantService: PointageManquantService) { }

  ngOnInit(): void {
    this.getPointagesManquants();
  }

  getPointagesManquants(): void {
    this.pointageManquantService.getPointagesManquants().subscribe(data => {
      this.pointagesManquants = data;
      this.filteredPointagesManquants = data;
    });
  }

  filterTable(): void {
    this.filteredPointagesManquants = this.pointagesManquants.filter(entry => 
      entry.employe.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  addPointageManquant(): void {
    this.pointageManquantService.addPointageManquant(this.newPointageManquant).subscribe(pointageManquant => {
      this.pointagesManquants.push(pointageManquant);
      this.filterTable();
      this.newPointageManquant = { codeEmploye: '', employe: '', date: '', pointageManquant: 'entrer', heure: '' };
      this.showModal = false;
    });
  }

  deletePointageManquant(codeEmploye: string, date: string): void {
    this.pointageManquantService.deletePointageManquant(codeEmploye, date).subscribe(() => {
      this.pointagesManquants = this.pointagesManquants.filter(pm => pm.codeEmploye !== codeEmploye || pm.date !== date);
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
