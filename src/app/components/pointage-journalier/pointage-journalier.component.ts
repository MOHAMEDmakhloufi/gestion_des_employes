import { Component, OnInit } from '@angular/core';
import { PointageJournalierService } from 'src/app/_services/pointage-journalier.service';
import { PointageJournalier } from 'src/app/_interfaces/PointageJournalier';
@Component({
  selector: 'app-pointage-journalier',
  templateUrl: './pointage-journalier.component.html',
  styleUrls: ['./pointage-journalier.component.css']
})
export class PointageJournalierComponent implements OnInit {
  pointageJournalier: PointageJournalier[] = [];
  filteredPointageJournalier: PointageJournalier[] = [];
  searchQuery: string = '';

  constructor(private pointageJournalierService: PointageJournalierService) { }

  ngOnInit(): void {
    this.pointageJournalierService.getPointageJournalier().subscribe(data => {
      this.pointageJournalier = data;
      this.filteredPointageJournalier = data;
    });
  }

  filterTable(): void {
    this.filteredPointageJournalier = this.pointageJournalier.filter(entry => 
      entry.employe.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
