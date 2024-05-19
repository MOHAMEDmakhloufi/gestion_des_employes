import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employe } from 'src/app/_interfaces/employe';
import { AuthentificationService } from 'src/app/_services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router,
    private authService: AuthentificationService
  ) { }

  login(): void {
    this.authService.logIn$({'nom': this.email, 'password':this.password} as Employe).subscribe({
      next: (response)=>{
        
        this.router.navigate(["/planning"])
      },
      error: (e)=> {

        alert(e.error?.message);
      }
    })
  }
}
