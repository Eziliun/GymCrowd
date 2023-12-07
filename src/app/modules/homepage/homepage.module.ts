import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ChartModule } from 'primeng/chart';
import { InputTextModule } from 'primeng/inputtext';
import { MapComponent } from '../map/map.component';






@NgModule({
  declarations: [HomepageComponent, MapComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    DialogModule,
    ChartModule,
    InputTextModule,
  ],
  providers:[MapComponent]
})
export class HomepageModule { }
