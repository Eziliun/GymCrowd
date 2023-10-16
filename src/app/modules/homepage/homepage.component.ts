import { Component } from '@angular/core';
import { iDadosAcademias } from './interface/homepage.model';
import { HomePageService } from './services/homepage.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  academiaListData!: iDadosAcademias[];

  academiaForm!: FormGroup;

  constructor(
    private homepageService: HomePageService,
    ) {
  
}

ngOnInit() {
  this.getDadosAcademia()
}

getDadosAcademia() {
  
  this.homepageService.getDadosAcademia().subscribe({
    next: res => {
      console.log(res);
      this.academiaListData = res;  
    },

    error: error => {
      console.log(error);
    }
  });
}
}


