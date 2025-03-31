import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
 
@Injectable({
  providedIn: 'root'
})
export class State {
  private _userEmail = new BehaviorSubject<string>('');
 
  get userEmail$(): Observable<string> {
    return this._userEmail.asObservable();
  }
 
  set userEmail(value: string) {
    this._userEmail.next(value);
  }
  
}