import { Component, OnInit } from '@angular/core';
import { AbsencesService } from 'src/app/_services/absences.service';


interface Absence {
  codeEmploye: string;
  employe: string;
  date: string;
  dureeAbsence: string;
  dateRetour: string;
}

@Component({
  selector: 'app-absences',
  templateUrl: './absences.component.html',
  styleUrls: ['./absences.component.css']
})
export class AbsencesComponent implements OnInit {
  absencesData: Absence[] = [];
  filteredAbsences: Absence[] = [];
  searchQuery: string = '';

  constructor(private absencesService: AbsencesService) { }

  ngOnInit(): void {
    this.getAbsences();
  }

  getAbsences(): void {
    this.absencesService.getAbsences().subscribe(data => {
      this.absencesData = data;
      this.filteredAbsences = data;
    });
  }

  filterTable(): void {
    this.filteredAbsences = this.absencesData.filter(entry => 
      entry.employe.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
