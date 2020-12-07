import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

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
