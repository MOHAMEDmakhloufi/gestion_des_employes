// repos.component.ts
import { Component, OnInit } from '@angular/core';
import { Repo } from 'src/app/_interfaces/repo';
import { ReposService } from 'src/app/_services/repos.service';


@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  repos: Repo[] = [];
  newRepo: Repo = { code: '', designation: '', couleur: '' };
  showAddForm: boolean = false;

  constructor(private reposService: ReposService) { }

  ngOnInit(): void {
    this.getRepos();
  }

  getRepos(): void {
    this.reposService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }

  addRepo(): void {
    this.reposService.addRepo(this.newRepo).subscribe(() => {
      this.getRepos();
      this.showAddForm = false;
      this.newRepo = { code: '', designation: '', couleur: '' };
    });
  }

  deleteRepo(code: string): void {
    this.reposService.deleteRepo(code).subscribe(() => {
      this.getRepos();
    });
  }
}
