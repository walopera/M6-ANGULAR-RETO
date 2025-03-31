import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICuenta } from '../interfaces/ingresardatoconsulta.interface';

@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  private apiUrl = 'http://localhost:8080/cuenta/saldo';
  constructor(private http: HttpClient) { }
  getSaldo(nroCuenta: string): Observable<any> {
    const body = { nroCuenta };
    return this.http.post<any>(this.apiUrl, body);
   
  }
  getUltimasTransacciones(nroCuenta: string): Observable<any[]> {
    // Simulación de una respuesta de transacciones
    const body = { nroCuenta };
    return this.http.post<any[]>('http://localhost:8080/transaccion/transacciones/ultimas5', body);
  }
  getcrear(nroCuenta: string, documentoTitular: string,direccion:string, tipoCuenta:string, saldo:string,telefono:string, email:string, titular:string ): Observable<any> {
    const body = { 
      documentoTitular,
      nroCuenta,
      direccion,
      tipoCuenta,
      saldo,
      telefono,
      email,
      titular
    };
    const headers = { 'Content-Type': 'application/json' };
    console.log(body);
    console.log(headers);
    return this.http.post<any>('http://localhost:8080/cuenta/crear', body, { headers });
   
  }

}
export class CuentaService1 {
  constructor(private http: HttpClient) { }
  getSaldo(nroCuenta: string): Observable<ICuenta> {
    return this.http.post<ICuenta>('http://localhost:8080/cuenta/saldo', nroCuenta);
  }

}

