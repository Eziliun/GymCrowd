import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take, tap } from 'rxjs';
import { CartaoResponse, iCartaoUsuario } from '../interface/cartao-usuario.modal';

@Injectable({
    providedIn: 'root'
})
export class CartaoUsuario {
    private apiURL = 'http://192.168.203.4:8080/v1/card' //URL Da API

    constructor(
        private http: HttpClient,
    ){}

    getCartao(): Observable<CartaoResponse>{
        return this.http
        .get<CartaoResponse>(this.apiURL)
        .pipe(tap(console.log), take(1));;
    }

    enviarCartao(cartaoInfo: iCartaoUsuario): Observable<iCartaoUsuario> {
        return this.http
        .post<iCartaoUsuario>(this.apiURL, cartaoInfo)
    }

    deleteCartao(id?: number): Observable<iCartaoUsuario> {
        const url = `${this.apiURL}/${id}`;
        return this.http.delete<iCartaoUsuario>(url);
    }
}