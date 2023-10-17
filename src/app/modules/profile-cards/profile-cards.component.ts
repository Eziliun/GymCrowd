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

  cartaoCreditoShow: any = {};

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
      cardNumber: ['', Validators.required],
      flag: ['', Validators.required],
      nameHolder:['', Validators.required],
      dueDate: ['', Validators.required],
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
        cardNumber: this.cartaoForm.controls['cardNumber'].value,
        flag: this.cartaoForm.controls['flag'].value,
        nameHolder: this.cartaoForm.controls['nameHolder'].value,
        dueDate: this.cartaoForm.controls['dueDate'].value,
      };

      this.cartaoService.enviarCartao(request).subscribe({
        next: (res) => {
          this.messageService.add({
            key: 'tb',
            severity: 'success',
            summary: 'Sucesso!',
            detail: 'Cupom Enviado Com Sucesso!',
          });

          this.cartaoCreditoShow.cardNumber = request.cardNumber;
          this.cartaoCreditoShow.flag = request.flag;
          this.cartaoCreditoShow.nameHolder = request.nameHolder;
          this.cartaoCreditoShow.dueDate = request.dueDate;
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
