import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { ProfileCardsComponent } from './profile-cards.component';
import { ProfileCardsRoutingModule } from './profile-cards-routing.module';


@NgModule({
  declarations: [ProfileCardsComponent],
  imports: [
    CommonModule,
    ProfileCardsRoutingModule,
    ButtonModule,
    DividerModule,
    InputTextModule,
  ]
})
export class ProfileCardsModule { }
