// src/app/pointeuse/pointeuse.component.ts
import { Component, OnInit } from '@angular/core';
import { Pointeuse } from 'src/app/_interfaces/pointeuse';
import { PointeuseService } from 'src/app/_services/pointeuse.service';



@Component({
  selector: 'app-pointeuse',
  templateUrl: './pointeuse.component.html',
  styleUrls: ['./pointeuse.component.css']
})
export class PointeuseComponent implements OnInit {
  pointeuses: Pointeuse[] = [];
  showPointeuseForm = false;

  constructor(private pointeuseService: PointeuseService) { }

  ngOnInit(): void {
    this.getPointeuses();
  }

  getPointeuses(): void {
    this.pointeuseService.getPointeuses().subscribe(pointeuses => {
      this.pointeuses = pointeuses;
    });
  }

  openAddPointeuseModal(): void {
    this.showPointeuseForm = true;
  }

  closePointeuseForm(): void {
    this.showPointeuseForm = false;
  }

  addPointeuse(pointeuse: Pointeuse): void {
    this.pointeuseService.addPointeuse(pointeuse).subscribe(newPointeuse => {
      this.pointeuses.push(newPointeuse);
      this.closePointeuseForm();
    });
  }

  deletePointeuse(code: string): void {
  
    this.pointeuseService.deletePointeuse(code).subscribe(() => {
    
      this.pointeuses = this.pointeuses.filter(p => p.code != code);
      
    });
  }
}
