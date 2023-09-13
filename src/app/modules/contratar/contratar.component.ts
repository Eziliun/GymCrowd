import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { iContratar } from './interface/contratar.model';
import { ContratarService } from './services/contratar.service';

interface Freq {
  name: string;
}

interface QTD {
  quantidade: string;
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
    ) {

  }

  ngOnInit() {
    this.setupForm();
    this.dropData();
  }

  dropData() {
    this.FreqType = [
      { name: 'Tipo de Frequência'},
      { name: 'Catraca' },
      { name: 'Leitor Facial'},
      { name: 'Lista'},
      { name: 'Outro'},
    ];

    this.QtdPick = [
      { quantidade: 'Quantidade de Academias'},
      { quantidade: '1'},
      { quantidade: '2'},
      { quantidade: '3'},
      { quantidade: '4'},
    ];
  }

  setupForm() {
    this.contratarForm = this.formBuilder.group({
      nome_academia: ['', Validators.required],
      CNPJ_academia: ['', Validators.required],
      email: ['', Validators.required],
      numero_telefone: ['', Validators.required],
      tipo_frequencia: ['', Validators.required],
      quantidade_academias: ['', Validators.required]
    });

  }

  getContact(){
    this.contratarService.getContratar().subscribe({
      next: res => {
        console.log(res);
        this.contratarData = res;
      },
      error: error => {
        console.log(error)
      }
    });
  }

  sendContact(){
    if (this.isFormValid){
      const req = this.contratarForm.value;

      this.contratarService.criarContratar(req).subscribe({
        next: () => {
          this.contratarForm.reset()
          console.log('Infos:', JSON.stringify(this.contratarForm.value));
        },
        error: error => {
          console.log(error)
        }
      })
    }
  }

  get isFormValid(): boolean {
    return this.contratarForm.valid;
  }
  
}
