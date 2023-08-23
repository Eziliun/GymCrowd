import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage-routing.module';
import { OrderListModule } from 'primeng/orderlist';
import { HomepageComponent } from './homepage.component';
import { TagModule } from 'primeng/tag';





@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    OrderListModule,
    TagModule,
    
  ],
})
export class HomepageModule { }
