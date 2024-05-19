import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employe } from 'src/app/_interfaces/employe';
import { Pointeuse } from 'src/app/_interfaces/pointeuse';
import { PointeuseService } from 'src/app/_services/pointeuse.service';

@Component({
  selector: 'app-employe-form',
  templateUrl: './employe-form.component.html',
  styleUrls: ['./employe-form.component.css']
})
export class EmployeFormComponent {
  @Input() show = false;
  @Output() close_ = new EventEmitter<void>();
  @Output() submit = new EventEmitter<Employe>();
  pointeuses: Pointeuse[] = [];
  employe: Employe = {
    nom: '',
    prenom: '',
    role: ''
  };
  constructor(private pointeuseService: PointeuseService) { }

  ngOnInit(): void {
    this.getPointeuses();
    this.employe = {
      nom: '',
      prenom: '',
      role: ''
    };
  }

  getPointeuses(): void {
    this.pointeuseService.getPointeuses().subscribe(pointeuses => {
      this.pointeuses = pointeuses;
    });
  }
  onSubmit(): void {
    this.submit.emit(this.employe);
    this.employe = {
      nom: '',
      prenom: '',
      role: ''
    };
  }

  close(): void {
    this.close_.emit();
    this.employe = {
      nom: '',
      prenom: '',
      role: ''
    };
  }
}
