import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from 'src/app/services/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name : string = "";
  playMessage : string;

  constructor(private route : ActivatedRoute, private welcomeService : WelcomeDataService) { }

  //Obtain the name parameter
  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']
  }

  //get response from the play backend
  generateWelcomeMessage() : void {
    this.welcomeService.executeTestPlayFramework().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }
  handleSuccessfulResponse(response : any) : void {
    this.playMessage = response.msg;
    console.log(response);
  }
  handleErrorResponse(error : any) : void {
    this.playMessage = error.message;
    console.log(error);
  }

  generateWelcomeMessageWithParameter() : void {
    this.welcomeService.executeTestPlayFrameworkParams(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    )
  }
}
