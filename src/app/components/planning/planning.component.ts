import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/_interfaces/employe';
import { Planning } from 'src/app/_interfaces/planning';
import { EmployeService } from 'src/app/_services/employe.service';
import { PlanningService } from 'src/app/_services/planning.service';


@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {
  plannings: Planning[] = [];
  employees: Employe[] = [];
  showPlanningForm = false;

  constructor(private planningService: PlanningService,
    private employeService: EmployeService
  ) { }

  ngOnInit(): void {
    this.getPlannings();
    this.getEmployees();
  }

  getEmployees(): void {
    // Assuming there's a service method to fetch employees
    this.employeService.getEmployes().subscribe(employees => {
      this.employees = employees;
    });
  }
  
  getPlannings(): void {
    this.planningService.getPlannings().subscribe(plannings => {
      this.plannings = plannings;
    });
  }

  openAddPlanningModal(): void {
    this.showPlanningForm = true;
  }

  closePlanningForm(): void {
    this.showPlanningForm = false;
  }

  addPlanning(planning: Planning): void {
    this.planningService.addPlanning(planning).subscribe(newPlanning => {
      this.plannings.push(newPlanning);
      this.closePlanningForm();
    });
  }

  deletePlanning(id: number): void {
    this.planningService.deletePlanning(id).subscribe(() => {
      this.plannings = this.plannings.filter(p => p.id !== id);
    });
  }
}
