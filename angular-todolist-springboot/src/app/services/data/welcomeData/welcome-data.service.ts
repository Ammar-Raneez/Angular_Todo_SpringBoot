import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

//for this to work, the fields specified in the backend
//must be same in the frontend
//therefore through some destructuring Angular knows what value
//to store in what, since our springboot backend HelloWorldBean has the attribute "message"
//in order for us to get it into the Angular frontend, we create the model also having the attribute "message"
export class HelloWorldBean {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {
  constructor(private httpClient : HttpClient) { }

  //connect to play backend
  executeSpringBoot() { 
    return this.httpClient.get<HelloWorldBean>("http://localhost:8081/hello-world-bean");
  }
  
  executeSpringBootParams(name : string) {
    return this.httpClient.get<HelloWorldBean>(`http://localhost:8081/hello-world/${name}`);
  }
}
