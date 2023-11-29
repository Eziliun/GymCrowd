import { Component, OnInit } from '@angular/core';
import { iDadosAcademias } from './interface/homepage.model';
import { HomePageService } from './services/homepage.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

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

  data: any;

  options: any;

  constructor(
    private homepageService: HomePageService,
    private router: Router
    ) {
  
}

ngOnInit() {
  this.getDadosAcademia();
  this.lotacaoGraphsInfo();
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
              data: [50, 25, 12, 48, 90, 76, 42]
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


