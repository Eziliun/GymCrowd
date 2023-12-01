import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take, tap } from 'rxjs';
import { academiaResponse, iDadosAcademias } from '../interface/homepage.model';
import { iAdicionarLocalização } from '../interface/adicionarLocal.model';
import { iGrafico } from '../interface/graphs.model';

@Injectable({
    providedIn: 'root'
})
export class HomePageService{
    private apiURL = 'http://192.168.203.4:8080/v1/gym'; //URL da API
    private apiURLNovoLocal = 'http://192.168.203.4:8080/v1/local'; //URL da API
    private apiURLGrafico = 'http://192.168.203.4:8080/v1/chart/home'; //URL da API

    constructor(
        private http: HttpClient,
        
    ){}

    getDadosAcademia(): Observable<academiaResponse>{
        return this.http
        .get<academiaResponse>(this.apiURL)
    }

    getDadosGrafico(): Observable<iGrafico>{
        return this.http
        .get<iGrafico>(this.apiURLGrafico)
    }

    criarDadosAcademia(dadosAcademias: iDadosAcademias): Observable<iDadosAcademias> {
        return this.http
        .post<iDadosAcademias>(this.apiURL, dadosAcademias)
    }

    adicionarLocal(dadosNovoLocal: iAdicionarLocalização): Observable<iAdicionarLocalização> {
        return this.http
        .post<iAdicionarLocalização>(this.apiURLNovoLocal, dadosNovoLocal)
    }
    
}