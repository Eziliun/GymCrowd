import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { Dialog, DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ButtonModule,
    DividerModule,
    InputTextModule,
    DialogModule,
    DropdownModule,
    
  ]
})
export class ProfileModule { }
