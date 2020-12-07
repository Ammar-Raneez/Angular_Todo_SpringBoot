import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from 'src/app/services/data/welcomeData/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name : string = "";
  springbootMsg : string;

  constructor(private route : ActivatedRoute, private welcomeService : WelcomeDataService) { }

  //Obtain the name parameter
  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']
  }

  //get response from the play backend
  generateWelcomeMessage() : void {
    this.welcomeService.executeSpringBoot().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    );
  }

  generateWelcomeMessageWithParameter() : void {
    this.welcomeService.executeSpringBootParams(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    )
  }
  handleSuccessfulResponse(response : any) : void {
    this.springbootMsg = response.message;
    console.log(response);
  }
  handleErrorResponse(error : any) : void {
    this.springbootMsg = error.message;
    console.log(error);
  }
}
