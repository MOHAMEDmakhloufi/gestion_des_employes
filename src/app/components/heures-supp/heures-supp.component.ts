import { Component, OnInit } from '@angular/core';
import { HeuresSupp } from 'src/app/_interfaces/HeuresSupp';
import { HeuresSuppService } from 'src/app/_services/heures-supp.service';

@Component({
  selector: 'app-heures-supp',
  templateUrl: './heures-supp.component.html',
  styleUrls: ['./heures-supp.component.css']
})
export class HeuresSuppComponent implements OnInit {
  heuresSuppData: HeuresSupp[] = [];
  filteredHeuresSupp: HeuresSupp[] = [];
  searchQuery: string = '';

  constructor(private heuresSuppService: HeuresSuppService) { }

  ngOnInit(): void {
    this.getHeuresSupp();
  }

  getHeuresSupp(): void {
    this.heuresSuppService.getHeuresSupp().subscribe(data => {
      this.heuresSuppData = data;
      this.filteredHeuresSupp = data;
    });
  }

  filterTable(): void {
    this.filteredHeuresSupp = this.heuresSuppData.filter(entry => 
      entry.employe.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
