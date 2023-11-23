import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { GymFilterComponent } from './gym-filter.component';
import { GymFilterRoutingModule } from './gym-filter-routing.module';
import { ChartModule } from 'primeng/chart';


@NgModule({
  declarations: [GymFilterComponent],
  imports: [
    CommonModule,
    ButtonModule,
    GymFilterRoutingModule,
    InputTextModule,
    DropdownModule,
    ReactiveFormsModule,
    MessagesModule,
    ToastModule,
    MessageModule,
    ChartModule,
  ]
})
export class GymFilterModule { }
