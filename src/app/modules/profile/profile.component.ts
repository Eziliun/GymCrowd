import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener, Renderer2, ElementRef } from '@angular/core';
import { iRegister } from '../login-page/interface/auth.model';
import { iAcademiaUser } from './interface/academia.model';
import { AcademiaUserService } from './service/profile.service';
import { FormGroup } from '@angular/forms';
import { iCartaoUsuario } from './interface/cartao-usuario.model';

interface RegisterAcademia {
  registerAcademiaName: string;
}

interface AssinaturaAcademia {
  assinaturaAcademia: string;
}

interface FormadePagamentoAcademia {
  formadePagamentoAcademia: string;
}


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{


  userAcademiForm!: FormGroup

  userAcademiaData!: iAcademiaUser

  crowdPassDialogVisible: boolean = false;

  academiaSincronizarDialogVisible: boolean = false;

  
  cartaoData!: iCartaoUsuario[];

  registerAcademias!: RegisterAcademia[];

  selectedAcademias!: RegisterAcademia;

  assinaturaAcademias!: AssinaturaAcademia[];

  selectedAssinaturaAcademia!: AssinaturaAcademia;

  formadePagamentoAcademias!: FormadePagamentoAcademia[];

  formadePagamentoSelected!: FormadePagamentoAcademia;

   constructor(
    private router: Router,
    private AcademiaUserService: AcademiaUserService
  ) {}

  ngOnInit(){
    this.getCards();
    this.dropDownSelector();
  }

  dropDownSelector() {
    this.registerAcademias = [
      { registerAcademiaName: 'SmartFit' },
      { registerAcademiaName: 'PinkFit' },
      { registerAcademiaName: 'RedFit' },
      { registerAcademiaName: 'PurpleFit' },
    ];

    this.assinaturaAcademias = [
      { assinaturaAcademia: 'Plano Padrão' },
      { assinaturaAcademia: 'Plano Black' },
      { assinaturaAcademia: 'Plano Premium' },
    ];

    this.formadePagamentoAcademias = [
      { formadePagamentoAcademia: 'Cartão de Crédito' },
      { formadePagamentoAcademia: 'Cartão de Débito' },
      { formadePagamentoAcademia: 'Boleto' },
      { formadePagamentoAcademia: 'PIX' },
    ];
  }

  getCards(){
    this.AcademiaUserService.getCartao().subscribe({
      next: res => {
        console.log(res)
        this.cartaoData = res.result;
      }
    })
  }

  navigatetoCards() {
    this.router.navigate(['/profileCards']);
  }
  
  navigatetoConfig() {
    this.router.navigate(['/profileConfig']);
  }

  showCrowdPassDialog(){
    this.crowdPassDialogVisible = true;
  }

  showAcademiaDialog(){
    this.academiaSincronizarDialogVisible = true;
  }

  getDadosAcademiaUser() {
    this.AcademiaUserService.iniciarCadastro(this.userAcademiaData).subscribe({
      next: res => {
        console.log(res);
        this.userAcademiaData = res;  
      },
  
      error: error => {
        console.log(error);
      }
    });
  }
  }

