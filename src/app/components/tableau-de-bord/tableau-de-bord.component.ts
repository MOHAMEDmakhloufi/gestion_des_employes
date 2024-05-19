import { Component, OnInit } from '@angular/core';
import { TableauDeBordItem } from 'src/app/_interfaces/tableauDeBord';
import { TableauDeBordService } from 'src/app/_services/tableau-de-bord.service';

@Component({
  selector: 'app-tableau-de-bord',
  templateUrl: './tableau-de-bord.component.html',
  styleUrls: ['./tableau-de-bord.component.css']
})
export class TableauDeBordComponent implements OnInit {
  tableauDeBord: TableauDeBordItem[] = [];

  constructor(private tableauDeBordService: TableauDeBordService) { }

  ngOnInit(): void {
    this.getTableauDeBord();
  }

  getTableauDeBord(): void {
    this.tableauDeBordService.getTableauDeBord().subscribe(items => {
      this.tableauDeBord = items;
    });
  }
}
