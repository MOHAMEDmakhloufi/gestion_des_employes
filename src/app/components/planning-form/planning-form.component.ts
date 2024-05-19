import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employe } from 'src/app/_interfaces/employe';
import { Planning } from 'src/app/_interfaces/planning';


@Component({
  selector: 'app-planning-form',
  templateUrl: './planning-form.component.html',
  styleUrls: ['./planning-form.component.css']
})
export class PlanningFormComponent {
  @Input() show = false;
  @Input() employees: Employe[] = [];
  @Output() close_ = new EventEmitter<void>();
  @Output() submit = new EventEmitter<Planning>();

  planning: Planning = {
    employe: { id: 0, nom: '', prenom: '' },
    jour: '',
    service: '',
    site: '',
    activite: ''
  };

  onSubmit(): void {
    this.submit.emit(this.planning);
    this.planning = {
      employe: { id: 0, nom: '', prenom: '' },
      jour: '',
      service: '',
      site: '',
      activite: ''
    };
  }

  close(): void {
    this.close_.emit();
    this.planning = {
      employe: { id: 0, nom: '', prenom: '' },
      jour: '',
      service: '',
      site: '',
      activite: ''
    };
  }
}
