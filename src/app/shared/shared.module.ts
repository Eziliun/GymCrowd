import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToolbarModule } from 'primeng/toolbar';
import { SidebarModule } from 'primeng/sidebar';
import { OverlayPanelModule } from 'primeng/overlaypanel';


@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    ButtonModule,
    ToolbarModule,
    SidebarModule,
    OverlayPanelModule,
  ],
  exports: [ HeaderComponent, FooterComponent  ],
  bootstrap: [ HeaderComponent, FooterComponent ],
  providers: []
  
})
export class SharedModule { }
