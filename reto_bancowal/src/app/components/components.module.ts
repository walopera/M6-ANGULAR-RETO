import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TransaccionesComponent } from './transacciones/transacciones.component';
import { IngresardatoconsultaComponent } from './ingresardatoconsulta/ingresardatoconsulta.component';
import { ComponentsRoutingModule } from './components.routing.module';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    TransaccionesComponent,
    IngresardatoconsultaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ComponentsRoutingModule

  ],
 
  exports: [
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    TransaccionesComponent,
    IngresardatoconsultaComponent
  ]
})
export class ComponentsModule { }