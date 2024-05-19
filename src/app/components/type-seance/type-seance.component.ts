import { Component, OnInit } from '@angular/core';
import { SeanceService } from 'src/app/_services/seance.service';

@Component({
  selector: 'app-type-seance',
  templateUrl: './type-seance.component.html',
  styleUrls: ['./type-seance.component.css']
})
export class TypeSeanceComponent implements OnInit {
  seanceTypes: string[] = ['double_seance', 'seance unique', 'ramadan'];
  currentSeanceType: string = '';

  constructor(private seanceService: SeanceService) { }

  ngOnInit(): void {
    this.getTypeSeance();
  }

  getTypeSeance(): void {
    this.seanceService.getTypeSeance().subscribe(type => {
      this.currentSeanceType = type;
    });
  }

  updateSeanceType(): void {
    this.seanceService.updateTypeSeance(this.currentSeanceType).subscribe(() => {
      console.log('Type de séance mis à jour avec succès.');
    });
  }
}
