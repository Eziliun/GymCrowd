import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratarComponent } from './contratar.component';

const routes: Routes = [
  {
    path: '',
    component: ContratarComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratarRoutingModule { }
