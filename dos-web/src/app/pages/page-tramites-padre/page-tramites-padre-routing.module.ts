import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAfiliacionesComponent } from './page-afiliaciones/page-afiliaciones/page-afiliaciones.component';
import { PageSolicitudesComponent } from './page-solicitudes/page-solicitudes/page-solicitudes.component';

import { PageTramitesPadreComponent } from './page-tramites-padre.component';

const routes: Routes = [
  { path: '', 
  component: PageTramitesPadreComponent,
  children: [
    {
      path: '',
      redirectTo: 'afiliaciones',
      pathMatch: 'full'
    },
    {
      path: 'afiliaciones',
      component: PageAfiliacionesComponent,
    },
    {
      path: 'solicitudes',
      component: PageSolicitudesComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageTramitesPadreRoutingModule { }
