import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedServiceService } from '../../services/shared-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  constructor(
    public globalService: SharedServiceService,
    private router: Router
  ) {}

  navigateToLogin() {
    this.router.navigate(['/login']);
}
}
