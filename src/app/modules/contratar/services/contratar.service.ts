import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take, tap } from 'rxjs';
import { iContratar } from '../interface/contratar.model';

@Injectable({
    providedIn: 'root'
})
export class ContratarService{
    private apiURL = ''; //URL da API

    constructor(
        private http: HttpClient,
        
    ){}

    getContratar(): Observable<iContratar>{
        return this.http
        .get<iContratar>(this.apiURL)
    }

    criarContratar(contrato: iContratar): Observable<iContratar> {
        return this.http
        .post<iContratar>(this.apiURL, contrato)
    }

    
}