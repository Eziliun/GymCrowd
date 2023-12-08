import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, take, throwError, timeout } from 'rxjs';
import { iLogin, iRegister, iRegisterResponse } from '../interface/auth.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiURLLogin = 'http://192.168.203.4:8080/v1/auth/login'; //URL da APILogin
  private apiURLRegister = 'http://192.168.203.4:8080/v1/users'; //URL da APILogin

  constructor(private http: HttpClient, private router: Router) {}

  login(data: any): Observable<iLogin> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<iLogin>(this.apiURLLogin, data, { headers }).pipe(
      take(3),
      timeout(3000),
      catchError((err) => this.handleError(err))
    );
  }

  register(data: iRegister): Observable<iRegisterResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post<iRegisterResponse>(this.apiURLRegister, data, { headers })
      .pipe(
        take(3),
        timeout(3000),
        catchError((err) => this.handleError(err))
      );
  }

  isAuthenticatedUser(): boolean {
    return localStorage.getItem('access_token') !== null;
  }


  // logout() {

  //   sessionStorage.clear();
  //   localStorage.clear();

  //   this.router.navigate(['/login']);
  // }

  // isAuthenticated(): boolean {
  //   const token = localStorage.getItem('access_token');
  //   return !!token;
  // }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 401) {
      return throwError(() => 'Usuário ou Senha inválidos.  ');
    } else if (error.status === 0 && error.error instanceof ProgressEvent) {
      return throwError(
        () => 'Erro ao consumir o serviço. Tente novamente mais tarde.'
      );
    } else {
      return throwError(() => 'Email ou Senha incorretos, Tente Novamente.');
    }
  }
}
