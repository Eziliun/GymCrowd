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
  },
  {
    path:'nossosservicos',
    loadChildren: () => import ('./modules/nossosservicos/nossosservicos.module').then(m => m.NossosservicosModule),
    title:"Nossos Servicos",
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
