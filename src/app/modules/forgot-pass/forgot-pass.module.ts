import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ForgotPassComponent } from './forgot-pass.component';
import { ForgotPassRoutingModule } from './forgot-pass.routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ForgotPassComponent],
  imports: [
    CommonModule,
    ButtonModule,
    ForgotPassRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ForgotPassModule { }
