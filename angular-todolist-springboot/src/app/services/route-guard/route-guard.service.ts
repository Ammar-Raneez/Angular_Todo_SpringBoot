import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { BasicAuthService } from '../basic-auth/basic-auth.service';

//Route guard, prevents navigation to todos link if user is not authenticated
@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {
  constructor(private basiAuthService : BasicAuthService, private router : Router) { }

  canActivate() : boolean {
    if(this.basiAuthService.getAuthenticatedUser()) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}
