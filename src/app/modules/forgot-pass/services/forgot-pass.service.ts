import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take, tap } from 'rxjs';
import { iForgotPass } from '../interface/forgot-pass.model';

@Injectable({
    providedIn: 'root'
})
export class ForgotPassService{
    private apiURL = ''; //URL da API

    constructor(
        private http: HttpClient,
        
    ){}

    getForgotPass(): Observable<iForgotPass>{
        return this.http
        .get<iForgotPass>(this.apiURL)
    }

    criarForgotPass(forgot: iForgotPass): Observable<iForgotPass> {
        return this.http
        .post<iForgotPass>(this.apiURL, forgot)
    }

    
}