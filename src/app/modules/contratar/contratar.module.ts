import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ContratarComponent } from './contratar.component';
import { ContratarRoutingModule } from './contratar-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContratarComponent],
  imports: [
    CommonModule,
    ButtonModule,
    ContratarRoutingModule,
    InputTextModule,
    DividerModule,
    DropdownModule,
    ReactiveFormsModule,
  ]
})
export class ContratarModule { }
