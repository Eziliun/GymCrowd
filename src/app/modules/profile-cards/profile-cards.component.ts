import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartaoResponse, iCartaoUsuario } from './interface/cartao-usuario.modal';
import { CartaoUsuario } from './services/cartao-usuario.service';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';

interface cartaoBandeiras {
  flag: string;
}

@Component({
  selector: 'app-profile-cards',
  templateUrl: './profile-cards.component.html',
  styleUrls: ['./profile-cards.component.scss']
})
export class ProfileCardsComponent {

  cartaoDataList!: iCartaoUsuario[];

  cartaoData!: iCartaoUsuario;

  cartaoResponse!: CartaoResponse;

  cartaoForm!: FormGroup;

  cartaoCreditoShow: any = {
  };

  bandeiraCartao!: cartaoBandeiras[];

  visibleCardDialog: boolean = false;


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private cartaoService: CartaoUsuario,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) {}

  ngOnInit(){
    this.getCards();
    this.setupForm();
    this.dropDownSelector();
  }

  dropDownSelector() {
    this.bandeiraCartao = [
      { flag: 'Visa' },
      { flag: 'MasterCard' },
      { flag: 'Elo' },
      { flag: 'Maestro' },
    ];
  }

  setupForm() {
    this.cartaoForm = this.formBuilder.group({
      card_number: ['', Validators.required],
      flag: ['', Validators.required],
      nameHolder:['', Validators.required],
      dueDate: ['', Validators.required],
    });
  }

  getCards(){
    this.cartaoService.getCartao().subscribe({
      next: res => {
        console.log(res)
        this.cartaoDataList = res.result;
      }
    })
  }

  sendCartao() {
    console.log(this.cartaoForm);
    if (this.isFormValid) {

      const request: iCartaoUsuario = {
        card_number: this.cartaoForm.controls['card_number'].value,
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


          this.cartaoForm.reset();
          this.getCards();
          this.visibleCardDialog = false;

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
      this.cartaoCreditoShow.card_number = request.card_number;
      this.cartaoCreditoShow.flag = request.flag;
      this.cartaoCreditoShow.nameHolder = request.nameHolder;
      this.cartaoCreditoShow.dueDate = request.dueDate;
    }
  }

  confirmDelete() {
    this.cartaoService.deleteCartao(this.cartaoData.id).subscribe({
      next: () => {
        this.getCards();
        console.log('Deleted successfully.');
        this.messageService.add({ 
          severity: 'error', 
          summary: 'Excluido', 
          detail: 'Campo apagado com sucesso!' 
        });
      },
      error: (error) => {
        console.log('Error deleting.', error);
      },
    });
  }
  
  handleCartaoDelete(card: iCartaoUsuario) {
    this.confirmationService.confirm({
      accept: () => {
        this.cartaoData = {...card}
        this.confirmDelete();
      },
      reject: (type: ConfirmEventType) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({
              severity: 'error',
              summary: 'Cancelada',
              detail: 'Exclusão Cancelada',
            });
            break;
        }
      },
    });
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

}
