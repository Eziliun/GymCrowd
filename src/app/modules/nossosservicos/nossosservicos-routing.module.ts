import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NossosservicosComponent } from './nossosservicos.component';

const routes: Routes = [
  {
    path: '',
    component: NossosservicosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NossosservicosRoutingModule { }
