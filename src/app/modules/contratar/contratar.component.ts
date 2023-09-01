import { Component } from '@angular/core';

interface Freq {
  name: string;
  code: string;
}

interface QTD {
  quantidade: string;
  code: string;
}

@Component({
  selector: 'app-contratar',
  templateUrl: './contratar.component.html',
  styleUrls: ['./contratar.component.scss']
})
export class ContratarComponent {
  FreqType: Freq[] | undefined;

  QtdPick: QTD[] | undefined;

  selectedFreq: Freq | undefined;

  selectedQtd: QTD | undefined;

  ngOnInit() {
      this.FreqType = [
          { name: 'Tipo de Frequência', code: 'TF' },
          { name: 'Catraca', code: 'CT' },
          { name: 'Leitor Facial', code: 'LF' },
          { name: 'Lista', code: 'LI' },
          { name: 'Outro', code: 'OT' }
      ];

      this.QtdPick = [
          { quantidade: 'Quantidade de Academias', code: '0' },
          { quantidade: '1', code: '1' },
          { quantidade: '2', code: '2' },
          { quantidade: '3', code: '3' },
          { quantidade: '4', code: '4' }
      ];
  }
}
