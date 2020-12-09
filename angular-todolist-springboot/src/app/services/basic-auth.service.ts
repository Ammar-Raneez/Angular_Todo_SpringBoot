import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {
  constructor(private httpClient : HttpClient) { }

  // authenticate(username : string, password : string) : boolean {
  //   if (username === 'ammar' && password === 'password') {
  //     sessionStorage.setItem('authenticatedUser', username)
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // isUserLoggedIn() : boolean {
  //   let user = sessionStorage.getItem('authenticatedUser');
  //   return !(user === null);
  // }

  // logout() : void {
  //   sessionStorage.removeItem('authenticatedUser');
  // }

  executeBasicAuthentication(username : string, password : string) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.httpClient.get<AuthenticationBean>(`http://localhost:8081/basicauth`, { headers })
    //.pipe => what must be done if the request succeeds or fails
      .pipe(
        map(
          response => {
            sessionStorage.setItem('authenticatedUser', username);
            sessionStorage.setItem('AuthToken', basicAuthHeaderString);
            return response;
          }
        )
      )
  }

  getAuthenticatedUser() : string {
    return sessionStorage.getItem('authenticatedUser');
  }

  getAuthenticatedToken() : string {
    if(this.getAuthenticatedUser) {
      return sessionStorage.getItem('AuthToken');
    }
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('AuthToken');
  }
}

export class AuthenticationBean {
  message : string;
}