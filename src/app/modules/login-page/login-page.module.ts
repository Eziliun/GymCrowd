import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import { ButtonModule } from 'primeng/button';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { InputMaskModule } from 'primeng/inputmask';





@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    ButtonModule,
    DividerModule,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
    MessagesModule,
    ToastModule,
    MessageModule,
    InputMaskModule,
  ],
})
export class LoginPageModule { }
