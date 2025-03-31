import { Component } from '@angular/core';
import { State } from '../state/state';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.css']
})
export class TransaccionesComponent {
  constructor(public state: State){
  
  }
  onSubmit1() {
    this.state.userEmail = 'walopera74@gmail.com';
    
    
  }
}
