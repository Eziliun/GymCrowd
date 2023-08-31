import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ViewChild('signupHeader') signupHeader!: ElementRef;
  @ViewChild('loginHeader') loginHeader!: ElementRef;

  ngAfterViewInit() {
    this.loginHeader.nativeElement.addEventListener('click', () => {
      this.wrapper.nativeElement.classList.add('active');
    });

    this.signupHeader.nativeElement.addEventListener('click', () => {
      this.wrapper.nativeElement.classList.remove('active');
    });
  }
}


