// pointage.component.ts
import { Component, OnInit } from '@angular/core';
import { Pointage } from 'src/app/_interfaces/pointage';
import { PointageService } from 'src/app/_services/pointage.service';
 // Adjust the import path

@Component({
  selector: 'app-pointages',
  templateUrl: './pointages.component.html',
  styleUrls: ['./pointages.component.css']
})
export class PointagesComponent implements OnInit {
  pointages: Pointage[] = [];

  constructor(private pointageService: PointageService) { }

  ngOnInit(): void {
    this.getPointages();
  }

  getPointages(): void {
    this.pointageService.getPointages().subscribe(pointages => {
      this.pointages = pointages;
    });
  }
}
