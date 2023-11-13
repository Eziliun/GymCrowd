import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HostListener, Renderer2, ElementRef } from '@angular/core';
import { iRegister } from '../login-page/interface/auth.model';
import { iAcademiaUser } from './interface/academia.model';
import { AcademiaUserService } from './service/profile.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { iCartaoUsuario } from './interface/cartao-usuario.model';

interface RegisterAcademia {
  registerAcademiaName: string;
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

  sincronizarForm!: FormGroup

  cartaoData!: iCartaoUsuario[];

  registerAcademias!: RegisterAcademia[];

  selectedAcademias!: RegisterAcademia;

   constructor(
    private router: Router,
    private AcademiaUserService: AcademiaUserService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(){
    this.getCards();
    this.dropDownSelector();
    this.setupForm();
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
      nomeRegistrado: ['', Validators.required],
      numeroCadastrado: ['', Validators.required],
      academiaSincronizar: ['', Validators.required],
    });

  }

  sendSincronizar(){
    if (this.isFormValid){
      const req = this.sincronizarForm.value;

      this.AcademiaUserService.sincronizarAcademia(req).subscribe({
        next: () => {
          this.sincronizarForm.reset()
        },
        error: error => {
          console.log(error)
        }
      })
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

  get isFormValid(): boolean {
    return this.sincronizarForm.valid;
  }

  }

