import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GymFilterComponent } from './gym-filter.component';

const routes: Routes = [
  {
    path: '',
    component: GymFilterComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GymFilterRoutingModule { }
