import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { delay, map, of } from 'rxjs';
import { State } from '../state/state';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, public state: State) {
    const obs = of(1, 2, 3, 4).pipe(
      delay(10000),
      map(value => value * 2)
    );
 
    obs.subscribe(value => console.log(value));
  }

  onSubmit() {
    const validUsername = 'admin';
    const validPassword = '12345';
console.log(this.username);
    if (this.username === validUsername && this.password === validPassword) {
      //this.state.userEmail = this.username; // Guarda el email del usuario en el estado
      this.state.userEmail = 'walopera74@gmail.com';
      this.router.navigate(['/transacciones']); // Redirige a la página de inicio
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }
}
