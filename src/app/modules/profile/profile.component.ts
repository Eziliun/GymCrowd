import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener, Renderer2, ElementRef } from '@angular/core';
import { iRegister } from '../login-page/interface/auth.model';
import { iAcademiaUser } from './interface/academia.model';
import { AcademiaUserService } from './service/profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  userData!: iRegister
  userAcademiaData!: iAcademiaUser

   constructor(
    private router: Router,
    private AcademiaUserService: AcademiaUserService
  ) {}

  navigatetoCards() {
    this.router.navigate(['/profileCards']);
  }
  
  navigatetoConfig() {
    this.router.navigate(['/profileConfig']);
  }

  getDadosAcademiaUser() {
    this.AcademiaUserService.iniciarCadastro(this.userAcademiaData).subscribe({
      next: res => {
        console.log(res);
        this.userAcademiaData = res;  
      },
  
      error: error => {
        console.log(error);
      }
    });
  }
  }

