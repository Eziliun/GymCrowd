import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { MapModule } from '../map/map.module';
import { MapComponent } from '../map/map.component';





@NgModule({
  declarations: [HomepageComponent, MapComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
  ],
})
export class HomepageModule { }
