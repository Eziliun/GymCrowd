import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable, catchError, take, tap, throwError, timeout } from 'rxjs';
  import { Router } from '@angular/router';
import { CartaoResponse } from '../interface/cartao-usuario.model';
import { iSincronizarAcademia } from '../interface/sincronizar.model';
  
  @Injectable({
    providedIn: 'root',
  })
  export class AcademiaUserService {
    private apiURLAcademiaUser = 'http://192.168.203.4:8080/v1/academia/user'; //URL da APIAcademiaUser
    private apiURLCard = 'http://192.168.203.4:8080/v1/card'
  
    constructor(private http: HttpClient, private router: Router) {}

    getCartao(): Observable<CartaoResponse>{
      return this.http
      .get<CartaoResponse>(this.apiURLCard)
}


    sincronizarAcademia(dadosSincronizarAcademia: iSincronizarAcademia): Observable<iSincronizarAcademia> {
      return this.http
        .post<iSincronizarAcademia>(this.apiURLAcademiaUser, dadosSincronizarAcademia) 
        .pipe(
          take(3),
          timeout(3000),
          catchError((err) => this.handleError(err))
        );
    }




  
    private handleError(error: HttpErrorResponse): Observable<never> {
      if (error.status === 401) {
        return throwError(() => 'Dados não encontrados.  ');
      } else if (error.status === 0 && error.error instanceof ProgressEvent) {
        return throwError(
          () => 'Erro ao consumir o serviço. Tente novamente mais tarde.'
        );
      } else {
        return throwError(
          () => 'Erro de Funcionamento, tente novamente mais tarde.'
        );
      }
    }
  
  
  }
  