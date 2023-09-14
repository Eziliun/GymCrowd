import { Injectable, isDevMode } from "@angular/core";
import { PrimeNGConfig } from "primeng/api";

@Injectable({
  providedIn: 'root',
})
export class AppConfig {
  constructor(
      private config: PrimeNGConfig,
  ) {}

  theme = 'lara-light-indigo';

  dark = false;

  inputStyle = 'outlined';

  ripple = true;

  async load() {
    if(isDevMode()){

    }
      this.config.ripple = true;

      this.config.setTranslation({
          startsWith: 'Começa com',
          contains: 'Contém',
          notContains: 'Não contém',
          endsWith: 'Termina com',
          equals: 'É igual a',
          notEquals: 'Não é igual',
          noFilter: 'Sem filtro',
          lt: 'Menor que',
          lte: 'Menos que ou igual a',
          gt: 'Maior que',
          gte: 'Maior que ou igual a',
          is: 'É',
          isNot: 'não é',
          before: 'Antes da',
          after: 'Depois',
          dateIs: '	Date is',
          dateIsNot: 'A data é',
          dateBefore: 'A data é anterior',
          dateAfter: 'A data é depois',
          clear: 'Limpar',
          apply: 'Aplicar',
          matchAll: 'Corresponder a todos',
          matchAny: 'Corresponder a qualquer',
          addRule: 'Adicionar regra',
          removeRule: 'Remover regra',
          accept: '	Sim',
          reject: '	Não',
          choose: '	Escolher',
          upload: '	Upload',
          cancel: '	Cancelar',
          dayNames: [
              'Domingo',
              'Segunda',
              'Terça',
              'Quarta',
              'Quinta',
              'Sexta',
              'Sábado',
          ],
          dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
          dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
          monthNames: [
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
          ],
          monthNamesShort: [
              'Jan',
              'Feb',
              'Mar',
              'Abr',
              'Mai',
              'Jun',
              'Jul',
              'Ago',
              'Set',
              'Out',
              'Nov',
              'Dez',
          ],
          dateFormat: 'dd/mm/yyyy',
          firstDayOfWeek: 0,
          today: 'Hoje',
          weekHeader: 'SE',
          weak: 'Fraco',
          medium: 'Média',
          strong: 'Forte',
          passwordPrompt: 'Insira uma senha',
          emptyMessage: 'Nenhum resultado encontrado',
          emptyFilterMessage: 'Nenhum resultado encontrado',
      });
  }
}