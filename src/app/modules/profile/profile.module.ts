import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ButtonModule,
  ]
})
export class ProfileModule { }
