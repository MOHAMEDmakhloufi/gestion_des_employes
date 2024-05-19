// src/app/pointeuse-form/pointeuse-form.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pointeuse } from 'src/app/_interfaces/pointeuse';


@Component({
  selector: 'app-pointeuse-form',
  templateUrl: './pointeuse-form.component.html',
  styleUrls: ['./pointeuse-form.component.css']
})
export class PointeuseFormComponent {
  @Input() show = false;
  @Output() close_ = new EventEmitter<void>();
  @Output() submit = new EventEmitter<Pointeuse>();

  pointeuse: Pointeuse = {
    code: '',
    libelle: '',
    ip: '',
    port: 0,
    site: '',
    filiale: '',
    societe: ''
  };

  onSubmit(): void {
    this.submit.emit(this.pointeuse);

    this.pointeuse = {
      code: '',
      libelle: '',
      ip: '',
      port: 0,
      site: '',
      filiale: '',
      societe: ''
    };
  }

  close(): void {
    this.close_.emit();

    this.pointeuse = {
      code: '',
      libelle: '',
      ip: '',
      port: 0,
      site: '',
      filiale: '',
      societe: ''
    };
  }
}
