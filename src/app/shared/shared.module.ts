import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToolbarModule } from 'primeng/toolbar';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    ButtonModule,
    ToolbarModule,
    SidebarModule
  ],
  exports: [ HeaderComponent, FooterComponent, SidebarComponent  ],
  bootstrap: [ HeaderComponent, FooterComponent, SidebarComponent ],
  providers: []
  
})
export class SharedModule { }
