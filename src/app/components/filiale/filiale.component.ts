import { Component, OnInit } from '@angular/core';
import { Filiale } from 'src/app/_interfaces/Filiale';
import { FilialeService } from 'src/app/_services/filiale.service';

@Component({
  selector: 'app-filiale',
  templateUrl: './filiale.component.html',
  styleUrls: ['./filiale.component.css']
})
export class FilialeComponent implements OnInit {
  filiales: Filiale[] = [];
  filteredFiliales: Filiale[] = [];
  searchQuery: string = '';
  newFiliale: Filiale = { codeFiliale: '', designation: '', societe: '' };
  showModal: boolean = false;

  constructor(private filialeService: FilialeService) { }

  ngOnInit(): void {
    this.getFiliales();
  }

  getFiliales(): void {
    this.filialeService.getFiliales().subscribe(data => {
      this.filiales = data;
      this.filteredFiliales = data;
    });
  }

  filterTable(): void {
    this.filteredFiliales = this.filiales.filter(entry => 
      entry.societe.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  addFiliale(): void {
    console.log(this.newFiliale)
    this.filialeService.addFiliale(this.newFiliale).subscribe(filiale => {
      this.filiales.push(filiale);
      this.filterTable();
      this.newFiliale = { codeFiliale: '', designation: '', societe: '' };
      this.showModal = false;
    });
  }

  deleteFiliale(codeFiliale: string): void {
   
    this.filialeService.deleteFiliale(codeFiliale).subscribe(() => {
      
      this.filiales = this.filiales.filter(f => f.codeFiliale !== codeFiliale);
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
