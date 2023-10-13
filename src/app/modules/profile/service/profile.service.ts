import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable, catchError, take, throwError, timeout } from 'rxjs';
  import { Router } from '@angular/router';
import { iAcademiaUser } from '../interface/academia.model';
  
  @Injectable({
    providedIn: 'root',
  })
  export class AcademiaUserService {
    private apiURLAcademiaUser = 'http://192.168.203.4:8080/v1/academia/user'; //URL da APIAcademiaUser
  
    constructor(private http: HttpClient, private router: Router) {}
  
    iniciarCadastro(dadosAcademiaUser: iAcademiaUser): Observable<iAcademiaUser> {
      return this.http
        .post<iAcademiaUser>(this.apiURLAcademiaUser, dadosAcademiaUser) 
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
  