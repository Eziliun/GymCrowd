import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ContratarComponent } from './contratar.component';
import { ContratarRoutingModule } from './contratar-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { InputMaskModule } from 'primeng/inputmask';


@NgModule({
  declarations: [ContratarComponent],
  imports: [
    CommonModule,
    ButtonModule,
    ContratarRoutingModule,
    InputTextModule,
    DropdownModule,
    ReactiveFormsModule,
    MessagesModule,
    ToastModule,
    MessageModule,
    InputMaskModule
  ]
})
export class ContratarModule { }
