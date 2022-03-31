import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { FormContactoComponent } from './contacto/form-contacto/form-contacto.component';
import { QueryEmergenciasComponent } from './emergencias/query-emergencias/query-emergencias.component';
import { CartillaMedicaBuscarComponent } from './search/cartilla-medica-buscar/cartilla-medica-buscar.component';
import { FarmaciaBuscarComponent } from './search/farmacia-buscar/farmacia-buscar.component';
import { LaboratorioBuscarComponent } from './search/laboratorio-buscar/laboratorio-buscar.component';
import { SedesBuscarComponent } from './search/sedes-buscar/sedes-buscar.component';
import { TurnosBuscarComponent } from './search/turnos-buscar/turnos-buscar.component';



const appRoutes: Routes = [
  {
    path: 'contacto',
   component: FormContactoComponent
 },

 {
    path: 'emergencias',
   component: QueryEmergenciasComponent
 },
 {
    path: 'cartillaMedica',
   component: CartillaMedicaBuscarComponent
 },

 {
    path: 'farmacia',
   component: FarmaciaBuscarComponent
 },

 {
    path: 'laboratorio',
   component: LaboratorioBuscarComponent
 },

 {
    path: 'sedes',
   component: SedesBuscarComponent
 },

 {
    path: 'turnos',
   component: TurnosBuscarComponent
 },

];


@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})

export class ComponentsRoutingModule {
}
