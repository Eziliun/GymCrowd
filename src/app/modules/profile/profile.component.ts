import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener, Renderer2, ElementRef } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

   constructor(
    private router: Router
  ) {}

  navigatetoCards() {
    this.router.navigate(['/profileCards']);
  }
  
  navigatetoConfig() {
    this.router.navigate(['/profileConfig']);
  }

  

}
