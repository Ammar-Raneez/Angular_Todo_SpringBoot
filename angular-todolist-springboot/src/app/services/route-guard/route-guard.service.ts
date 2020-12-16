import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthService } from '../hard-coded-auth/hardcoded-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {
  constructor(private hardcodedAuthService : HardcodedAuthService, private router : Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
    if(this.hardcodedAuthService.isUserLoggedIn()) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}
