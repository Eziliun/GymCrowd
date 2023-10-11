import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take, tap } from 'rxjs';
import { iCartaoUsuario } from '../interface/cartao-usuario.modal';

@Injectable({
    providedIn: 'root'
})
export class CartaoUsuario {
    private apiURL = ' ' //URL Da API

    constructor(
        private http: HttpClient,
    ){}

    getCartao(): Observable<iCartaoUsuario>{
        return this.http
        .get<iCartaoUsuario>(this.apiURL)
        .pipe(tap(console.log), take(1));;
    }

    enviarCartao(cartaoInfo: iCartaoUsuario): Observable<iCartaoUsuario> {
        return this.http
        .post<iCartaoUsuario>(this.apiURL, cartaoInfo)
    }
}