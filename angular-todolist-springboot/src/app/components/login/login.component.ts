import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthService } from 'src/app/services/basic-auth/basic-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : string = "ammar";
  password : string = "";
  errorMessage : string = "Invalid Credentials";
  invalidLogin : boolean = false;

  //Router
  //Dependency injection (injecting dependencies of LoginComponent)
  constructor(private router : Router, private basicAuthService : BasicAuthService) { }

  ngOnInit(): void {
  }

  handleBasicAuthLogin(): void {
    this.basicAuthService.executeBasicAuthentication(this.username, this.password).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['welcome', this.username]);
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    )
  }
}
