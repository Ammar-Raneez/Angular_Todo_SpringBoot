import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

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
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })
    return this.httpClient.get<HelloWorldBean>("http://localhost:8081/hello-world-bean", 
    // { headers }
    );
  }
  
  executeSpringBootParams(name : string) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })
    return this.httpClient.get<HelloWorldBean>(`http://localhost:8081/hello-world/${name}`, 
    // { headers }
    );
  }

  // createBasicAuthenticationHttpHeader() {
  //   let username = "ammar";
  //   let password = "password";
  //basic representation of username and password 
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }
}
