import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-cards',
  templateUrl: './profile-cards.component.html',
  styleUrls: ['./profile-cards.component.scss']
})
export class ProfileCardsComponent {

  constructor(
    private router: Router
  ) {}

  navigatetoProfile() {
    this.router.navigate(['/profile']);
  }

  navigatetoConfig() {
    this.router.navigate(['/profileConfig']);
  }

}
