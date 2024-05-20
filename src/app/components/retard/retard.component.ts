import { Component, OnInit } from '@angular/core';
import { Retard } from 'src/app/_interfaces/Retard';
import { RetardService } from 'src/app/_services/retard.service';

@Component({
  selector: 'app-retard',
  templateUrl: './retard.component.html',
  styleUrls: ['./retard.component.css']
})
export class RetardComponent implements OnInit {
  retardsData: Retard[] = [];
  filteredRetards: Retard[] = [];
  searchQuery: string = '';

  constructor(private retardsService: RetardService) { }

  ngOnInit(): void {
    this.getRetards();
  }

  getRetards(): void {
    this.retardsService.getRetards().subscribe(data => {
      this.retardsData = data;
      this.filteredRetards = data;
    });
  }

  filterTable(): void {
    this.filteredRetards = this.retardsData.filter(entry => 
      entry.employe.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
