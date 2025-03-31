import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { TransaccionesComponent } from './components/transacciones/transacciones.component';
import { IngresardatoconsultaComponent } from './components/ingresardatoconsulta/ingresardatoconsulta.component';


const routes: Routes = [ 
{path: '', loadChildren: () => import('./components/components.module').then(module => module.ComponentsModule)},
{ path: 'ingresardatoconsulta/:id', component: IngresardatoconsultaComponent }, // Ruta con parámetro
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
