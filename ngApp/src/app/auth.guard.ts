import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{


  // Inject auth method for logged in and the router for the navigation
  constructor(private _authService: AuthService,
    private _router: Router) {}



  // check if the token is exis in the broswer then return true to complete to profile page
  // if not, redirect to login page agian
  
    canActivate(): boolean {
      if (this._authService.loggedIn()) {
        return true;
      } else {
        this._router.navigate(['./login'])
        return false;
      }
    }
}
