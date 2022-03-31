import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService } from './services/auth-guard.service';



const routes: Routes = [
  {
    path: '',
    //  canActivateChild: [AuthGuardService],
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'components',
        // canActivateChild: [AuthGuardService],
        loadChildren: () => import('../components/components.module').then(m => m.ComponentsModule),
        
      },
      
     {
        path: 'pages',
        // canActivateChild: [AuthGuardService],
        loadChildren: () => import('../pages/pages.module').then(m => m.PagesModule),
      },
      {
        path: 'forbidden',
        component: ForbiddenComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class CoreRoutingModule {
}




