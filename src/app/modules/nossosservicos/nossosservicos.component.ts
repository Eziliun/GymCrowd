import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './nossosservicos.component.html',
  styleUrls: ['./nossosservicos.component.scss']
})
export class NossosservicosComponent {
  constructor(
    private router: Router,
  ) {}

  navigateToContratar() {
    this.router.navigate(['/contratar']);
  }
}
