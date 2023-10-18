import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { ProfileCardsComponent } from './profile-cards.component';
import { ProfileCardsRoutingModule } from './profile-cards-routing.module';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
  declarations: [ProfileCardsComponent],
  providers: [
    ConfirmationService
  ],
  
  imports: [
    CommonModule,
    ProfileCardsRoutingModule,
    ButtonModule,
    DividerModule,
    InputTextModule,
    DialogModule,
    ReactiveFormsModule,
    ToastModule,
    InputMaskModule,
    DropdownModule,
    ConfirmDialogModule
    
    
  ]
})
export class ProfileCardsModule { }
