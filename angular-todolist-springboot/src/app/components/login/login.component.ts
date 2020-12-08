import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthService } from 'src/app/services/hardcoded-auth.service';

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
  constructor(private router : Router, private hardcodedAuthService : HardcodedAuthService) { }

  ngOnInit(): void {
  }

  handleLogin(): void {
    if(this.hardcodedAuthService.authenticate(this.username, this.password)) {
      //Redirect to welcome page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
