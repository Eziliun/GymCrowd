import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take, tap } from 'rxjs';
import { academiaResponse, iDadosAcademias } from '../interface/homepage.model';

@Injectable({
    providedIn: 'root'
})
export class HomePageService{
    private apiURL = 'http://192.168.203.4:8080/v1/gym'; //URL da API

    constructor(
        private http: HttpClient,
        
    ){}

    getDadosAcademia(): Observable<academiaResponse>{
        return this.http
        .get<academiaResponse>(this.apiURL)
    }

    criarDadosAcademia(dadosAcademias: iDadosAcademias): Observable<iDadosAcademias> {
        return this.http
        .post<iDadosAcademias>(this.apiURL, dadosAcademias)
    }
    
}