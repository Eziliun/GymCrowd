import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take, tap } from 'rxjs';
import { iContratar } from '../interface/contratar.model';

@Injectable({
    providedIn: 'root'
})
export class ContratarService{
    private apiURL = 'http://192.168.203.4:8080/v1/hire'; //URL da API

    constructor(
        private http: HttpClient,
        
    ){}

    criarContratar(contrato: iContratar): Observable<iContratar> {
        return this.http
        .post<iContratar>(this.apiURL, contrato)
    }

    
}