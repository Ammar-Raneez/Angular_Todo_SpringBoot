import { Injectable } from '@angular/core';

//The injectable makes it a Service
//What's special here is that code here can be accessed
//By any component
@Injectable({
  //provided for root, therefore anything within the root can access it
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor() { }

  authenticate(username : string, password : string) : boolean {
    if (username === 'ammar' && password === 'password') {
      sessionStorage.setItem('authenticatedUser', username)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() : boolean {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() : void {
    sessionStorage.removeItem('authenticatedUser');
  }
}
