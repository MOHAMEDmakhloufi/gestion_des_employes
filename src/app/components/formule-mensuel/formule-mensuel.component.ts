import { Component, OnInit } from '@angular/core';
import { FormuleMensuel } from 'src/app/_interfaces/FormuleMensuel';
import { FormuleMensuelService } from 'src/app/_services/formule-mensuel.service';

@Component({
  selector: 'app-formule-mensuel',
  templateUrl: './formule-mensuel.component.html',
  styleUrls: ['./formule-mensuel.component.css']
})
export class FormuleMensuelComponent implements OnInit {
  formuleMensuel: FormuleMensuel = {
    nbre_heures_max: 0,
    nbre_heures_min: 0,
    heure_supp: 0
  };

  constructor(private formuleMensuelService: FormuleMensuelService) { }

  ngOnInit(): void {
    this.getFormuleMensuel();
  }

  getFormuleMensuel(): void {
    this.formuleMensuelService.getFormuleMensuel().subscribe(formuleMensuel => {
      this.formuleMensuel = formuleMensuel;
    });
  }

  updateFormuleMensuel(): void {
    this.formuleMensuelService.updateFormuleMensuel(this.formuleMensuel).subscribe(() => {
      // Handle success or error
    });
  }
}
