import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NossosservicosRoutingModule } from './nossosservicos-routing.module';

import { ButtonModule } from 'primeng/button';
import { NossosservicosComponent } from './nossosservicos.component';


@NgModule({
  declarations: [NossosservicosComponent],
  imports: [
    CommonModule,
    NossosservicosRoutingModule,
    ButtonModule,
  ]
})
export class NossosservicosModule { }
