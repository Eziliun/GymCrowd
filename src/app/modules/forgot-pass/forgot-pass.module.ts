import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ForgotPassComponent } from './forgot-pass.component';
import { ForgotPassRoutingModule } from './forgot-pass.routing.module';
import { DialogModule } from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ForgotPassComponent],
  imports: [
    CommonModule,
    ButtonModule,
    ForgotPassRoutingModule,
    DialogModule,
    ReactiveFormsModule,
  ]
})
export class ForgotPassModule { }
