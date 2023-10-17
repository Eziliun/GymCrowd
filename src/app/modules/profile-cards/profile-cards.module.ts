import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { ProfileCardsComponent } from './profile-cards.component';
import { ProfileCardsRoutingModule } from './profile-cards-routing.module';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { InputMaskModule } from 'primeng/inputmask';


@NgModule({
  declarations: [ProfileCardsComponent],
  imports: [
    CommonModule,
    ProfileCardsRoutingModule,
    ButtonModule,
    DividerModule,
    InputTextModule,
    DialogModule,
    ReactiveFormsModule,
    ToastModule,
    InputMaskModule
    
  ]
})
export class ProfileCardsModule { }
