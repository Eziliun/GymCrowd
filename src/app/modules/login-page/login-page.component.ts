import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { iLogin, iRegister } from './interface/auth.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  
  constructor(
    private formBuilder: FormBuilder,
  ) {}

  @ViewChild('wrapper') wrapper!: ElementRef;
  @ViewChild('signupHeader') signupHeader!: ElementRef;
  @ViewChild('loginHeader') loginHeader!: ElementRef;

  registerForm!: FormGroup;

  registerData!: iRegister;

  loginForm!: FormGroup;

  loginData!: iLogin;



  ngOnInit() {
    this.setupForm();
  }

  setupForm() {
    this.registerForm = this.formBuilder.group({
      username:['', Validators.required],
      email:['', Validators.required] ,
      CPF:['', Validators.required] ,
      password:['', Validators.required] ,
      confirm_password:['', Validators.required] ,
      terms_conditions:['', Validators.required] ,
    });

    this.loginForm = this.formBuilder.group({
      username:['', Validators.required],
      password:['', Validators.required] ,
      remember_me:['', Validators.required] ,
    });

  }

  sendRegister() {
    console.log('Infos:', JSON.stringify(this.registerForm.value));
  }

  sendLogin() {
    console.log('Infos:', JSON.stringify(this.loginForm.value));
  }



  ngAfterViewInit() {
    this.loginHeader.nativeElement.addEventListener('click', () => {
      this.wrapper.nativeElement.classList.add('active');
    });

    this.signupHeader.nativeElement.addEventListener('click', () => {
      this.wrapper.nativeElement.classList.remove('active');
    });
  }
}


