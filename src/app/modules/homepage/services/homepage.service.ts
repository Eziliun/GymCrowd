import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take, tap } from 'rxjs';
import { iDadosAcademias } from '../interface/homepage.model';

@Injectable({
    providedIn: 'root'
})
export class HomePageService{
    private apiURL = ''; //URL da API

    constructor(
        private http: HttpClient,
        
    ){}

    getDadosAcademia(): Observable<iDadosAcademias[]>{
        return this.http
        .get<iDadosAcademias[]>(this.apiURL)
    }

    criarDadosAcademia(dadosAcademias: iDadosAcademias): Observable<iDadosAcademias> {
        return this.http
        .post<iDadosAcademias>(this.apiURL, dadosAcademias)
    }
    
}