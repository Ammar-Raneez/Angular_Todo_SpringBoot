import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthService } from 'src/app/services/basic-auth/basic-auth.service';
// import { HardcodedAuthService } from 'src/app/services/hard-coded-auth/hardcoded-auth.service';

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
  constructor(private router : Router, //private hardcodedAuthService : HardcodedAuthService, 
    private basicAuthService : BasicAuthService) { }

  ngOnInit(): void {
  }

  // handleLogin(): void {
  //   if(this.hardcodedAuthService.authenticate(this.username, this.password)) {
      //Redirect to welcome page
  //     this.router.navigate(['welcome', this.username]);
  //     this.invalidLogin = false;
  //   } else {
  //     this.invalidLogin = true;
  //   }
  // }

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
