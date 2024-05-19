import { Component, OnInit } from '@angular/core';
import { Employe } from 'src/app/_interfaces/employe';
import { AdminService } from 'src/app/_services/admin.service';
import { EmployeService } from 'src/app/_services/employe.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  employees: Employe[] = [];
  admins: Employe[] = [];
  selectedEmployee: number | undefined;

  constructor(private adminService: AdminService,
    private employeService: EmployeService
  ) { }

  ngOnInit(): void {
    this.getEmployees();
    this.getAdmins();
  }

  getEmployees(): void {
    this.employeService.getEmployes().subscribe(employees => {
      this.employees = employees;
    });
  }

  getAdmins(): void {
    this.adminService.getAdmin().subscribe(admins => {
      this.admins = admins;
    });
  }

  addAdmin(): void {
    if (this.selectedEmployee) {
     
      this.adminService.createAdmin(this.selectedEmployee).subscribe(admin => {
        this.admins.push(admin);
        // Reset selectedEmployee
        this.selectedEmployee = undefined;
      });
    }
  }
  deleteAdmin(adminId: number): void {
    this.adminService.deleteAdmin(adminId).subscribe(() => {
      this.admins = this.admins.filter(admin => admin.id !== adminId);
    });
  }
}
