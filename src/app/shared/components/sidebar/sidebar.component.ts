import { Component } from '@angular/core';
import { SharedServiceService } from '../../services/shared-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']

})
export class SidebarComponent {

  constructor(
    private globalService: SharedServiceService
  ) {}

  lista:any = [
    {rota: 'homepage', nome: "Inicio" },
    {rota: 'clients', nome: "Clientes" },
    {rota: 'servicos', nome: "Serviços" },
    {rota: 'Contratar', nome: "Contratar" }
    
  ]
  
  sideBarVisibless = this.globalService.sideBarState();


  
}
