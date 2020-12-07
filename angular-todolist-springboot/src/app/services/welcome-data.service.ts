import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export class Test {
  msg:string;
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {
  constructor(private httpClient : HttpClient) { }

  //connect to play backend
  executeTestPlayFramework() { 
    return this.httpClient.get<Test>("http://localhost:9000/test");
  }
  
  executeTestPlayFrameworkParams(name : string) {
    return this.httpClient.get<Test>(`http://localhost:9000/test/${name}`);
  }
}
