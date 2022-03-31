import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { FormContactoComponent } from './contacto/form-contacto/form-contacto.component';
import { QueryEmergenciasComponent } from './emergencias/query-emergencias/query-emergencias.component';
import { CartillaMedicaBuscarComponent } from './search/cartilla-medica-buscar/cartilla-medica-buscar.component';
import { FarmaciaBuscarComponent } from './search/farmacia-buscar/farmacia-buscar.component';
import { LaboratorioBuscarComponent } from './search/laboratorio-buscar/laboratorio-buscar.component';
import { TurnosBuscarComponent } from './search/turnos-buscar/turnos-buscar.component';
import { SedesBuscarComponent } from './search/sedes-buscar/sedes-buscar.component';


@NgModule({
  declarations: [
      FormContactoComponent,
      QueryEmergenciasComponent,
      CartillaMedicaBuscarComponent,
      FarmaciaBuscarComponent,
      LaboratorioBuscarComponent,
      TurnosBuscarComponent,
      SedesBuscarComponent,
  
  ],

  entryComponents: [
    FormContactoComponent,
    QueryEmergenciasComponent,
    CartillaMedicaBuscarComponent,
    FarmaciaBuscarComponent,
    LaboratorioBuscarComponent,
    TurnosBuscarComponent,
    SedesBuscarComponent,
  ],

  exports: [
    FormContactoComponent,
    QueryEmergenciasComponent,
    CartillaMedicaBuscarComponent,
    FarmaciaBuscarComponent,
    LaboratorioBuscarComponent,
    TurnosBuscarComponent,
    SedesBuscarComponent,
  ],

  imports: [
    CommonModule,   
    ComponentsRoutingModule,   
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule {

}