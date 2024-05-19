import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/_interfaces/employe'; // Adjust the import path as needed
import { EmployeService } from 'src/app/_services/employe.service';
// Adjust the import path as needed

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  employes: Employe[] = [];
  showEmployeForm = false;

  constructor(private employeService: EmployeService) { }

  ngOnInit(): void {
    this.getEmployes();
  }

  getEmployes(): void {
    this.employeService.getEmployes().subscribe(employes => {
      this.employes = employes;
    });
  }

  openAddEmployeModal(): void {
    this.showEmployeForm = true;
  }

  closeEmployeForm(): void {
    this.showEmployeForm = false;
  }

  addEmploye(employe: Employe): void {
    this.employeService.addEmploye(employe).subscribe(newEmploye => {
      console.log(this.employes)
      this.employes.push(newEmploye);
      this.closeEmployeForm();
    });
  }

  deleteEmploye(id: number): void {
    this.employeService.deleteEmploye(id).subscribe(() => {
      this.employes = this.employes.filter(e => e.id !== id);
    });
  }
}
