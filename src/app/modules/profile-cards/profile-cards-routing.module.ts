import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileCardsComponent } from './profile-cards.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileCardsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileCardsRoutingModule { }
