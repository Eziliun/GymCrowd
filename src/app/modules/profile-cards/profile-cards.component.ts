import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartaoResponse, iCartaoUsuario } from './interface/cartao-usuario.modal';
import { CartaoUsuario } from './services/cartao-usuario.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-profile-cards',
  templateUrl: './profile-cards.component.html',
  styleUrls: ['./profile-cards.component.scss']
})
export class ProfileCardsComponent {

  cartaoData!: iCartaoUsuario[];

  cartaoResponse!: CartaoResponse;

  cartaoForm!: FormGroup;

  visibleCardDialog: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private cartaoService: CartaoUsuario,
    private messageService: MessageService,
  ) {}

  ngOnInit(){
    this.getCards();
    this.setupForm();
  }

  setupForm() {
    this.cartaoForm = this.formBuilder.group({
      NumeroCartao: ['', Validators.required],
      BandeiraCartao: ['', Validators.required],
      NomeUsuarioCartao:['', Validators.required],
      DataVencimentoCartao: ['', Validators.required],
    });
  }

  getCards(){
    this.cartaoService.getCartao().subscribe({
      next: res => {
        console.log(res)
        this.cartaoData = res.result;
      }
    })
  }

  sendCartao() {
    console.log(this.cartaoForm);
    if (this.isFormValid) {

      const request: iCartaoUsuario = {
        NumeroCartao: this.cartaoForm.controls['NumeroCartao'].value,
        BandeiraCartao: this.cartaoForm.controls['BandeiraCartao'].value,
        NomeUsuarioCartao: this.cartaoForm.controls['NomeUsuarioCartao'].value,
        DataVencimentoCartao: this.cartaoForm.controls['DataVencimentoCartao'].value,
      };

      this.cartaoService.enviarCartao(request).subscribe({
        next: (res) => {
          this.messageService.add({
            key: 'tb',
            severity: 'success',
            summary: 'Sucesso!',
            detail: 'Cupom Enviado Com Sucesso!',
          });
          this.cartaoForm.reset();
          this.getCards();
        },
        error: (error) => {
          this.messageService.add({
            key: 'tb',
            severity: 'error',
            summary: 'Erro!',
            detail: error.message,
          });
        },
      });
    }
  }



  openCardDialog() {
    this.visibleCardDialog = true;
}

get isFormValid(): boolean {
  return this.cartaoForm.valid;
}

  navigatetoProfile() {
    this.router.navigate(['/profile']);
  }

  navigatetoConfig() {
    this.router.navigate(['/profileConfig']);
  }

}
