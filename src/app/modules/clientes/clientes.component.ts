import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent {

  responsiveOptions: any[] | undefined;

  constructor(private router: Router) {}
  ngOnInit() {

}

redirectToSmartFit() {
  const smartFitUrl = 'https://www.smartfit.com';
  window.open(smartFitUrl, '_blank'); 
}

redirectToPinkFit() {
  const pinkfitURL = 'https://www.pinkfit.com.br/';
  window.open(pinkfitURL, '_blank'); 
}

redirectToRedFit() {
  const pinkfitURL = 'https://redfit.com.br/';
  window.open(pinkfitURL, '_blank'); 
}

redirectToPurpleFit() {
  const pinkfitURL = 'https://purplefit.ca/';
  window.open(pinkfitURL, '_blank'); 
}
}

