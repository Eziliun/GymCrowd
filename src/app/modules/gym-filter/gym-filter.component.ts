import { Component } from '@angular/core';

interface Horarios {
    horas: string;
}

@Component({
  selector: 'app-gym-filter',
  templateUrl: './gym-filter.component.html',
  styleUrls: ['./gym-filter.component.scss']
})
export class GymFilterComponent {
  data: any;

  options: any;

  chooseGymDialog: boolean = false;

  horarios: Horarios[] | undefined;

  selectedHorarios: Horarios | undefined;

  selectedGym: string | undefined;

  enteredCEP: string | undefined;

  ngOnInit() {

    this.configDropDowns();

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
        labels: ['6-8', '8-10', '10-12', '12-14', '14-16', '16-18', '18-20', '20-22', '22-24'],
        datasets: [
            {
                label: 'SmartFit',
                data: [70, 60, 45, 50, 65, 75, 80, 85, 75], 
                fill: false,
                backgroundColor: '#f5670f',
                borderColor: '#f5670f', 
                tension: 0.4
            },
            {
                label: 'PurpleFit',
                data: [40, 50, 55, 60, 70, 65, 45, 40, 35], 
                fill: false,
                backgroundColor: '#a40ff5', 
                borderColor: '#a40ff5', 
                tension: 0.4
            },
            {
                label: 'PinkFit',
                data: [60, 55, 50, 45, 40, 50, 55, 60, 65], 
                fill: false,
                backgroundColor:'#f520e3',
                borderColor: '#f520e3', 
                tension: 0.4
            },
            {
                label: 'RedFit',
                data: [45, 50, 60, 70, 80, 75, 65, 55, 50], 
                fill: false,
                backgroundColor:'#f51a0f',
                borderColor: '#f51a0f', 
                tension: 0.4
            }
        ]
    };

    this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };
}

showChooseGymDialogSelection() {

    if(this.isValidForm()){

    const gymNames = ['SmartFit', 'PurpleFit', 'PinkFit', 'RedFit'];

    const randomIndex = Math.floor(Math.random() * gymNames.length);
  
    this.selectedGym = gymNames[randomIndex];

    this.chooseGymDialog = false;
    this.resetFormValues();


    } else {
        this.selectedGym = "Preencha o Formulário"
    }

}

resetFormValues() {
    this.selectedHorarios = undefined;
    this.enteredCEP = undefined;
  }

getColorForGym(gymName: string): string {
    switch (gymName) {
      case 'SmartFit':
        return '#f5670f'; 
      case 'PurpleFit':
        return '#a40ff5'; 
      case 'PinkFit':
        return '#f520e3'; 
      case 'RedFit':
        return '#f51a0f'; 
      default:
        return '#000000'; 
    }
  }

configDropDowns(){
    this.horarios = [
        { horas: '6-8',},
        { horas: '8-10'},
        { horas: '10-12'},
        { horas: '12-14'},
        { horas: '14-16'},
        { horas: '16-18'},
        { horas: '20-22'},
        { horas: '22-24'},
    ];
}

showChooseGymDialog(){
    this.chooseGymDialog = true;
  }

  isValidForm(): boolean {
    return this.selectedHorarios !== undefined && this.enteredCEP !== undefined;
  }
}
