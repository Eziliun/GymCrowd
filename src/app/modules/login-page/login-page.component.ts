import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { iLogin, iRegister } from './interface/auth.model';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService,
  ) {}

  @ViewChild('wrapper') wrapper!: ElementRef;
  @ViewChild('signupHeader') signupHeader!: ElementRef;
  @ViewChild('loginHeader') loginHeader!: ElementRef;

  registerForm!: FormGroup;

  registerData!: iRegister;

  loginForm!: FormGroup;

  loginData!: iLogin;



  ngOnInit() {
    this.setupFormRegister();
    this.setupFormLogin();

  }

  setupFormRegister() {
    this.registerForm = this.formBuilder.group({
      username:['', Validators.required],
      email:['', Validators.required] ,
      cpf:['', Validators.required] ,
      password:['', Validators.required] ,
      confirmPassword:['', Validators.required] ,
      termsConditions:[false, Validators.required] ,
    });
  }

  setupFormLogin() {
    this.loginForm = this.formBuilder.group({
        login:['', Validators.required],
        password:['', Validators.required] ,
        remember_me:[false, Validators.required] ,
        
    })
  }

  sendRegister() {
    if(this.registerForm.valid){
      this.authService.register(this.registerForm.value).subscribe({
        next: () => {
          console.log('Infos:', JSON.stringify(this.registerForm.value));
          this.messageService.add({
            key: 'tc',
            severity: 'success',
            summary: 'Deu certo',
            detail: 'Deu bom', 
          });

        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            key: 'tc',
            severity: 'error',
            summary: 'Error',
            detail: error 
          });
        }
      });   
    }
  }

  sendLogin() {
    if(this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (resp) => {
            console.log('Infos:', JSON.stringify(this.loginForm.value));
            localStorage.setItem("acess_token", resp.token);
            this.router.navigateByUrl('homepage');
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            key: 'tc',
            severity: 'error',
            summary: 'Error',
            detail: error 
          });
        }
      });   
    }
  }

  resetForms() {
    this.loginForm.reset();
    this.registerForm.reset();
  }




  ngAfterViewInit() {
    this.loginHeader.nativeElement.addEventListener('click', () => {
      this.wrapper.nativeElement.classList.add('active');
      this.resetForms();
    });

    this.signupHeader.nativeElement.addEventListener('click', () => {
      this.wrapper.nativeElement.classList.remove('active');
      this.resetForms();
    });
  }
}


