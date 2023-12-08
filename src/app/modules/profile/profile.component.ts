import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener, Renderer2, ElementRef } from '@angular/core';
import { iRegister } from '../login-page/interface/auth.model';
import { AcademiaUserService } from './service/profile.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { iCartaoUsuario } from './interface/cartao-usuario.model';
import { iSincronizarAcademia } from './interface/sincronizar.model';
import { MessageService } from 'primeng/api';

interface RegisterAcademia {
  registerAcademiaName: string;
}



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  email: string = '';
  username: string = '';
  cpf: string = '';


  userAcademiForm!: FormGroup


  crowdPassDialogVisible: boolean = false;

  academiaSincronizarDialogVisible: boolean = false;
  
  sincronizarForm!: FormGroup

  cartaoData!: iCartaoUsuario[];

  registerAcademias!: RegisterAcademia[];

  selectedAcademias!: RegisterAcademia;

   constructor(
    private router: Router,
    private AcademiaUserService: AcademiaUserService,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
  ) {}

  ngOnInit(){
    this.getCards();
    this.dropDownSelector();
    this.setupForm();
    this.email = localStorage.getItem('email') ?? '';
    this.username = localStorage.getItem('username') ?? '';
    this.cpf = localStorage.getItem('cpf') ?? '';
  }

  dropDownSelector() {
    this.registerAcademias = [
      { registerAcademiaName: 'SmartFit' },
      { registerAcademiaName: 'PinkFit' },
      { registerAcademiaName: 'RedFit' },
      { registerAcademiaName: 'PurpleFit' },
    ];
  }

  setupForm() {

    this.sincronizarForm = this.formBuilder.group({
      nome_registrado: ['', Validators.required],
      numero_cadastrado: ['', Validators.required],
      academia_sincronizar: ['', Validators.required],
      forma_pagamento: [undefined],
      assinatura: [undefined],
      frequencia_usuario: [undefined],
    });

  }

sendSincronizar() {
  if (this.isFormValid) {
    const nomeRegistrado = this.sincronizarForm.get('nome_registrado')?.value;
    const numeroCadastrado = this.sincronizarForm.get('numero_cadastrado')?.value;
    const academiaSincronizar = this.sincronizarForm.get('academia_sincronizar')?.value;
    const request: iSincronizarAcademia = {
      nome_registrado: nomeRegistrado,
      numero_registrado: numeroCadastrado,
      academia_sincronizar: academiaSincronizar,
    };

    this.AcademiaUserService.sincronizarAcademia(request).subscribe({
      next: (res) => {
        const data = res.result;

        this.sincronizarForm.patchValue({
          academia_sincronizar: data.academia_sincronizar,
          forma_pagamento: data.forma_pagamento,
          assinatura: data.assinatura,
          frequencia_usuario: data.frequencia_usuario,
        });
        this.messageService.add({
          key: 'tc',
          severity: 'success',
          summary: 'Sucesso!',
          detail: 'Sicronização Ocorreu com Sucesso!',
        });
        this.academiaSincronizarDialogVisible = false;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}


  getCards(){
    this.AcademiaUserService.getCartao().subscribe({
      next: res => {
        console.log(res)
        this.cartaoData = res.result;
      }
    })
  }

  sendCrowdPass(){
    this.messageService.add({
      key: 'tc',
      severity: 'success',
      summary: 'Sucesso!',
      detail: 'Cartão Selecionado!',
    });
    this.crowdPassDialogVisible = false
  }

  navigatetoCards() {
    this.router.navigate(['/profileCards']);
  }


  showCrowdPassDialog(){
    this.crowdPassDialogVisible = true;
  }

  showAcademiaDialog(){
    this.academiaSincronizarDialogVisible = true;
  }

  get isFormValid(): boolean {
    return this.sincronizarForm.valid;
  }

  }

