import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthService } from '../../basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {
  constructor(private basicAuthService : BasicAuthService) { }

  //http interceptor to add the Authorization headers
  //so we can use this for any route we visit
  //otherwise we'll have to copy paste the code in welcome-data.service
  //in all of our services
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // let username = "ammar";
    // let password = "password";

    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let basicAuthHeaderString = this.basicAuthService.getAuthenticatedToken();
    let username = this.basicAuthService.getAuthenticatedUser();
    
    if (basicAuthHeaderString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      })
    }
    return next.handle(request);
  }
}
