import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { ProfileConfigComponent } from './profile-config.component';
import { ProfileConfigRoutingModule } from './profile-config-routing.module';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [ProfileConfigComponent],
  imports: [
    CommonModule,
    ProfileConfigRoutingModule,
    ButtonModule,
    DividerModule,
    InputTextModule,
    DropdownModule
  ]
})
export class ProfileConfigModule { }
