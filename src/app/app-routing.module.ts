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
    path:'servicos',
    loadChildren: () => import ('./modules/nossosservicos/nossosservicos.module').then(m => m.NossosservicosModule),
    title:"Nossos Servicos",
  },
  {
    path:'contratar',
    loadChildren: () => import ('./modules/contratar/contratar.module').then(m => m.ContratarModule),
    title:"Contratar"
  },
  {
    path:'auth',
    loadChildren: () => import ('./modules/login-page/login-page.module').then(m => m.LoginPageModule),    
    title:"Auth"
  },
  {
    path:'forgotPass',
    loadChildren: () => import ('./modules/forgot-pass/forgot-pass.module').then(m => m.ForgotPassModule),    
    title:"ForgotPass"
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
