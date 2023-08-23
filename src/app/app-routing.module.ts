import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full',
  },

  {
    path: 'homepage',
    loadChildren: () => import ('./modules/homepage/homepage.module').then(m =>m.HomepageModule),
    title:"Home",
  },
  {
    path:'clients',
    loadChildren: () => import ('./modules/clientes/clientes.module').then(m => m.ClientesModule),
    title:"Clientes",
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
