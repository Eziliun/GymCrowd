import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesRoutingModule } from './clientes-routing.module';
import { CardModule } from 'primeng/card';
import { ClientesComponent } from './clientes.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [ClientesComponent],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    CardModule,
    ButtonModule,
  ]
})
export class ClientesModule { }
