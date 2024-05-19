import { Component, OnInit } from '@angular/core';
import { Employe } from '../_interfaces/employe';
import { AuthentificationService } from '../_services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: Employe | null;
  constructor(private authService: AuthentificationService,
    private router:Router
  ){

  }

  ngOnInit(): void {
    this.authService.employe.subscribe({
      next: (response) => this.user = response
    })
  }

  authSwitch(){
    if(this.user){
      this.authService.logout()
    }else{
      this.router.navigate(['/login']);
    }
  }
}
