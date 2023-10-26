import { Component } from '@angular/core';
import { iDadosAcademias } from './interface/homepage.model';
import { HomePageService } from './services/homepage.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  academiaListData!: iDadosAcademias[];

  academiaForm!: FormGroup;

  visibleGraphAcad: boolean = false

  constructor(
    private homepageService: HomePageService,
    private router: Router
    ) {
  
}

ngOnInit() {
  this.getDadosAcademia()
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

navigateToLogin() {
  this.router.navigate(['/auth']);
}

showGraphAcad(){
  this.visibleGraphAcad = true;
}
}


