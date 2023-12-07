import { Component, OnInit } from '@angular/core';
import { iDadosAcademias } from './interface/homepage.model';
import { HomePageService } from './services/homepage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { iGrafico } from './interface/graphs.model';
import { AddressSavedResponse } from '../map/interface/mapa.model';
import { MapaService } from '../map/services/mapa.service';
import { MapComponent } from '../map/map.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  academiaListData!: iDadosAcademias[];

  academiaForm!: FormGroup;

  visibleGraphAcad: boolean = false;

  visibleAddLocation: boolean = false;

  adicionarLocalForm!: FormGroup;

  adicionarLocalData!: AddressSavedResponse;


  dadosGrafico!: iGrafico;

  data: any;

  options: any;

  constructor(
    private homepageService: HomePageService,
    private router: Router,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private mapaService: MapaService, 
    private mapComponent: MapComponent,
    ) {
  
}

ngOnInit() {
  this.getDadosAcademia();
  this.getDadosGrafico();
  this.lotacaoGraphsInfo();
  this.setupForm();
}

getDadosAcademia() {
  
  this.homepageService.getDadosAcademia().subscribe({
    next: res => {
      console.log(res);
      this.academiaListData = res.result; 
    },

    error: error => {
      console.log(error);
    }
  });
}

getDadosGrafico() {
  
  this.homepageService.getDadosGrafico().subscribe({
    next: res => {
      console.log(res);
     this.dadosGrafico = res; 
    },

    error: error => {
      console.log(error);
    }
  });
}

sendLocal(){
  if(this.isFormValid){
    const formValue = this.adicionarLocalForm.value;

    this.mapComponent.postEnderecosSalvos(formValue);
  }
}

sendNovoLocal(){
  if(this.isFormValid) {
    const formValue = this.adicionarLocalForm.value;

    this.mapaService.sendMarkerSaveDados(formValue).subscribe({
      next: () =>{
        console.log('infos', JSON.stringify(formValue));
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso!',
          detail: 'Local Adicionado com Sucesso!',
        });
        this.adicionarLocalForm.reset();
        this.visibleAddLocation = false;
      },
      error: error => {
        console.log(error);
        console.log('infos', JSON.stringify(formValue));
      }
    })
  }
}

lotacaoGraphsInfo(){
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--text-color');
  const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
  const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

  this.data = {
      labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado', 'Domingo'],
      datasets: [
          {
              type: 'bar',
              label: 'Manhã',
              backgroundColor: documentStyle.getPropertyValue('--yellow-500'),
              data: [27, 12, 45, 74, 23, 42, 37]
          },
          {
              type: 'bar',
              label: 'Tarde',
              backgroundColor: documentStyle.getPropertyValue('--orange-500'),
              data: [21, 84, 24, 75, 37, 65, 34]
          },
          {
              type: 'bar',
              label: 'Noite',
              backgroundColor: documentStyle.getPropertyValue('--red-800'),
              data: [41, 52, 24, 74, 23, 21, 32]
          }
      ]
  };

  this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
          tooltips: {
              mode: 'index',
              intersect: false
          },
          legend: {
              labels: {
                  color: textColor
              }
          }
      },
      scales: {
          x: { 
              stacked: true,
              ticks: {
                  color: textColorSecondary
              },
              grid: {
                  color: surfaceBorder,
                  drawBorder: false
              }
          },
          y: {
              stacked: true,
              ticks: {
                  color: textColorSecondary
              },
              grid: {
                  color: surfaceBorder,
                  drawBorder: false
              }
          }
      }
  };
}

setupForm(){
  this.adicionarLocalForm = this.formBuilder.group({
    nome_local: ['', Validators.required],
    endereco_completo: ['', Validators.required],
  });
}

get isFormValid(): boolean {
  return this.adicionarLocalForm.valid;
}

navigateToLogin() {
  this.router.navigate(['/auth']);
}

showGraphAcad(){
  this.visibleGraphAcad = true;
}

showAddLocation(){
  this.visibleAddLocation = true;
}
}


