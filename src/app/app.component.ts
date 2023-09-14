import { Component, OnInit } from '@angular/core';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { AppConfig } from './shared/config/appconfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService],
})
export class AppComponent implements OnInit {
  
  constructor(
    private primengConfig: PrimeNGConfig,
    private appConfig: AppConfig
    ) {}

  title = 'gymcrowd';

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.appConfig.load();
  }
}
