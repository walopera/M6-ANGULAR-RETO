import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { ICuenta } from 'src/app/interfaces/ingresardatoconsulta.interface';
import { CuentaService, CuentaService1} from 'src/app/services/cuenta.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ingresardatoconsulta',
  templateUrl: './ingresardatoconsulta.component.html',
  styleUrls: ['./ingresardatoconsulta.component.css']
})
export class IngresardatoconsultaComponent implements OnInit {
  nrocuenta: string = ''; 
  tipocuenta: string = '';
  documentoTitular: string = '';
  direccion: string = '';
  telefono: string = '';
  nombreTitular: string = '';
  saldo: number = 0;
  saldostr: string = '';
  email: string = '';
  titular: string = '';
  errorMessage: string = '';
  Cuentaifo: any;
  datacreainfo: any;
  Cuentaifoarr: any[] =[];
  id: string = '';
  //constructor(private router: Router) {};
constructor(private cuentaService: CuentaService, private route: ActivatedRoute){}
ngOnInit() {

      // Captura el parámetro 'id' de la URL
      this.route.paramMap.subscribe(params => {
        this.id = params.get('id') || ''; // Obtiene el valor del parámetro 'id'
        console.log('ID recibido:', this.id);
      });
}


  onSubmitC1() {
    

    if (this.nrocuenta === ' ' ) {
      this.errorMessage = 'Cuenta no debe estar en blanco';
    } else {   
      switch (this.id) {
        case '101': // Caso para consultar saldo   
     
    this.cuentaService.getSaldo(this.nrocuenta).subscribe(
         { 
          //next: (datacuenta: any) => {
          next: (datacuenta: ICuenta) => {
          console.log(datacuenta);
          this.Cuentaifo = datacuenta;
        },
        error: (err: any) => {
          console.log(err);
          this.errorMessage = 'Cuenta no encontrada';
        }
    });
    break;

    case '102': // Caso para consultar últimas 5 transacciones
      this.cuentaService.getUltimasTransacciones(this.nrocuenta).subscribe({
        next: (transacciones: any[]) => {
          console.log(transacciones);
          this.Cuentaifoarr = transacciones ; // Asigna las transacciones a la variable
          console.log(this.Cuentaifoarr);
        },
        error: (err: any) => {
          console.log(err);
          this.errorMessage = 'No se encontraron transacciones';
        }
      });
      break;
    case '103'://caso para crear cuenta
    this.saldostr = this.saldo.toString();
    this.cuentaService.getcrear(this.nrocuenta, this.documentoTitular,this.direccion, this.tipocuenta, this.saldostr,this.telefono, this.email, this.titular).subscribe({
      next: (datacrea: any) => {
        console.log(datacrea);
        this.datacreainfo = datacrea ; // Asigna la respuesta cuenta creada
        
      },
      error: (err: any) => {
        console.log(err);
        this.errorMessage = 'No se creó la cuenta';
      }
    });
    break;
    default: // Caso por defecto si el ID no coincide con ningún caso
      this.errorMessage = 'Operación no válida para este ID';
      console.log('ID no reconocido:', this.id);
      break;
  }
  }
}
}
