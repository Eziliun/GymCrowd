import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './modules/login-page/service/auth-guard.service';

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
  {
    path:'profile',
    loadChildren: () => import ('./modules/profile/profile.module').then(m => m.ProfileModule),    
    title:"Profile",
  },
  {
    path:'profileCards',
    loadChildren: () => import ('./modules/profile-cards/profile-cards.module').then(m => m.ProfileCardsModule),    
    title:"ProfileCards",
  },
  {
    path:'profileConfig',
    loadChildren: () => import ('./modules/profile-config/profile-config.module').then(m => m.ProfileConfigModule),    
    title:"ProfileConfig",
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
