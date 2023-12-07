import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { iContratar } from './interface/contratar.model';
import { ContratarService } from './services/contratar.service';
import { MessageService } from 'primeng/api';

interface Freq {
  name: string;
}

interface QTD {
  quantidade: number;
}

@Component({
  selector: 'app-contratar',
  templateUrl: './contratar.component.html',
  styleUrls: ['./contratar.component.scss'],
})
export class ContratarComponent {

  FreqType: Freq[] | undefined;

  QtdPick: QTD[] | undefined;

  selectedFreq: Freq | undefined;

  selectedQtd: QTD | undefined;

  contratarForm!: FormGroup;

  contratarData!: iContratar;


  constructor(
    private formBuilder: FormBuilder,
    private contratarService: ContratarService,
    private messageService: MessageService,
    ) {

  }

  ngOnInit() {
    this.setupForm();
    this.dropData();
  }

  dropData() {
    this.FreqType = [
      { name: 'Catraca' },
      { name: 'Leitor Facial'},
      { name: 'Lista'},
      { name: 'Outro'},
    ];

    this.QtdPick = [
      { quantidade: 1},
      { quantidade: 2},
      { quantidade: 3},
      { quantidade: 4},
      { quantidade: 5},
    ];
  }

  setupForm() {
    this.contratarForm = this.formBuilder.group({
      nome_academia: ['', Validators.required],
      cnpj_academia: ['', Validators.required],
      email: ['', Validators.required],
      numero_telefone: ['', Validators.required],
      tipo_frequencia: ['', Validators.required],
      quantidade_academias: ['', Validators.required]
    });

  }

  sendContact() {
    if (this.isFormValid) {
      const formValue = this.contratarForm.value;
  
  
      const quantidadeAcademias = formValue.quantidade_academias.quantidade;
      const tipoFrequencia = formValue.tipo_frequencia.name;
  
      const requestData = {
        ...formValue,
        tipo_frequencia: tipoFrequencia,
        quantidade_academias: quantidadeAcademias
      };
  
      this.contratarService.criarContratar(requestData).subscribe({
        next: () => {
          console.log('Infos:', JSON.stringify(requestData));
          this.messageService.add({
            key: 'tc',
            severity: 'success',
            summary: 'Sucesso!',
            detail: 'Formuário Enviado com Sucesso!',
          });
          this.contratarForm.reset();
        },
        error: error => {
          console.log(error);
        }
      });
    }
  }
  
  

  get isFormValid(): boolean {
    return this.contratarForm.valid;
  }
  
}
