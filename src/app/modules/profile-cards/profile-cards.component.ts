import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-cards',
  templateUrl: './profile-cards.component.html',
  styleUrls: ['./profile-cards.component.scss']
})
export class ProfileCardsComponent {

  cartaoForm!: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}

  navigatetoProfile() {
    this.router.navigate(['/profile']);
  }

  navigatetoConfig() {
    this.router.navigate(['/profileConfig']);
  }

}
