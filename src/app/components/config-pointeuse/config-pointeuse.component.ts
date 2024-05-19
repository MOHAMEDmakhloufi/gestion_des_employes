import { Component, OnInit } from '@angular/core';
import { ConfigurationPointeuse } from 'src/app/_interfaces/configurationPointeuse';
import { ConfigurationPointeuseService } from 'src/app/_services/configuration-pointeuse.service';

@Component({
  selector: 'app-config-pointeuse',
  templateUrl: './config-pointeuse.component.html',
  styleUrls: ['./config-pointeuse.component.css']
})
export class ConfigPointeuseComponent implements OnInit {
  configurations: ConfigurationPointeuse[] = [];
  filterCode: string = '';

  constructor(private configurationService: ConfigurationPointeuseService) { }

  ngOnInit(): void {
    this.getConfigurations();
  }

  getConfigurations(): void {
    this.configurationService.getConfigurations().subscribe(configurations => {
      this.configurations = configurations;
    });
  }

  searchConfigurations(): void {
    this.configurationService.searchConfigurations(this.filterCode).subscribe(configurations => {
      this.configurations = configurations;
    });
  }
}
