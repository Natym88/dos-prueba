import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageTramitesPadreRoutingModule } from './page-tramites-padre-routing.module';
import { PageTramitesPadreComponent } from './page-tramites-padre.component';
import { PageAfiliacionesComponent } from './page-afiliaciones/page-afiliaciones/page-afiliaciones.component';
import { PageSolicitudesComponent } from './page-solicitudes/page-solicitudes/page-solicitudes.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [PageTramitesPadreComponent,
  PageAfiliacionesComponent, PageSolicitudesComponent],


  imports: [
    CommonModule,
    PageTramitesPadreRoutingModule,
  ],

  exports: [
    RouterModule,   
    // BrowserAnimationsModule,  

    
  ]
})
export class PageTramitesPadreModule { }
