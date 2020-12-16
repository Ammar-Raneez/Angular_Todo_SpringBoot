import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import { API_URL } from '../../app.constants';

export const TOKEN = 'AuthToken';
export const AUTHENTICATED_USER = 'authenticatedUser'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {
  constructor(private httpClient : HttpClient) { }

  executeBasicAuthentication(username : string, password : string) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.httpClient.get<AuthenticationBean>(`${API_URL}/basicauth`, { headers })
    //.pipe => what must be done if the request succeeds or fails
      .pipe(
        map(
          response => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, basicAuthHeaderString);
            return response;
          }
        )
      )
  }

  getAuthenticatedUser() : string {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() : string {
    if(this.getAuthenticatedUser) {
      return sessionStorage.getItem(TOKEN);
    }
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}

export class AuthenticationBean {
  message : string;
}