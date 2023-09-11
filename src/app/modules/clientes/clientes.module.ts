import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [ClientesComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    ButtonModule,
  ]
})
export class ClientesModule { }
