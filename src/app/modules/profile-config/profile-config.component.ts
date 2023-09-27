import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Monitore {
  name: string;
}

@Component({
  selector: 'app-profile-config',
  templateUrl: './profile-config.component.html',
  styleUrls: ['./profile-config.component.scss']
})
export class ProfileConfigComponent {

  Monitore: Monitore[] | undefined;

  selectedMonitore: Monitore | undefined;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.Monitore = [
        { name: 'Sim' },
        { name: 'Não' },
    ];
}

  navigatetoCards() {
    this.router.navigate(['/profileCards']);
  }

  navigatetoProfile() {
    this.router.navigate(['/profile']);
  }

}
