import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { State } from "./components/state/state";
import { Observable } from "rxjs";


@Injectable({providedIn: 'root'})
export class rutaGuard implements CanActivate {
 
 
  constructor(private router: Router, private state: State) { }
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
    let email = '';
    this.state.userEmail$.subscribe((value) => {
      email = value
    });
    console.log('email: ', email);
    if (email  == 'walopera74@gmail.com') {
      console.log('paso por el if');
      return true;
    } else {
      console.log('paso por el else');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
 