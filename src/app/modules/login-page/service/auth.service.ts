import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, take, throwError, timeout } from 'rxjs';
import { iLogin, iRegister } from '../interface/auth.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURLLogin = 'http://192.168.203.4:8080/v1/auth/login'; //URL da APILogin
  private apiURLRegister = 'http://192.168.203.4:8080/v1/users'; //URL da APILogin


  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  login(data: any): Observable<iLogin> {
    return this.http.post<iLogin>(this.apiURLLogin, data)
      .pipe(
        take(3),
        timeout(3000),
        catchError((err) => this.handleError(err))
      );
  }

  register(data: any): Observable<iRegister> {
    return this.http.post<iRegister>(this.apiURLRegister, data)
      .pipe(
        take(3),
        timeout(3000),
        catchError((err) => this.handleError(err))
      );
  }

      logout() {
        localStorage.removeItem('access_token');
    
        sessionStorage.clear();
      
        this.router.navigate(['/login']);
      }
    
       private handleError(error: HttpErrorResponse): Observable<never> {
        if (error.status === 401) {
          return throwError(() => 'Usuário ou Senha inválidos.  ');
      } else if (error.status === 0 && error.error instanceof ProgressEvent) {
        return throwError(() =>'Erro ao consumir o serviço. Tente novamente mais tarde.');
      } else {
          return throwError(() =>'Erro de Funcionamento, tente novamente mais tarde.');
        }
      }
      
      
      isAuthenticated(): boolean {
        const token = localStorage.getItem('access_token'); 
        return !!token; 
      }

}
