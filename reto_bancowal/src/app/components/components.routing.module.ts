import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {TransaccionesComponent} from './transacciones/transacciones.component';
import { rutaGuard } from 'src/app/ruta.guars';
import { IngresardatoconsultaComponent } from './ingresardatoconsulta/ingresardatoconsulta.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

 
const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    //loadChildren: () => import('./components.module').then(module => module.ComponentsModule)
  },
  {
    path: 'transacciones',  
    component:TransaccionesComponent,
    canActivate: [rutaGuard],
  },
  
   {path: 'login', component: LoginComponent},
  
   {path: 'ingresardatoconsulta', component: IngresardatoconsultaComponent,
    //canActivate: [rutaGuard]
   }
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  //imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }