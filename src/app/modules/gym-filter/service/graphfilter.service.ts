import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take, tap } from 'rxjs';
import { iGraficoFilter } from '../interface/filterGraph.model';

@Injectable({
    providedIn: 'root'
})
export class GraphFilterService{
    private apiURL = 'http://192.168.203.4:8080/v1/chart/filter';

    constructor(
        private http: HttpClient,
        
    ){}

    getDadosAcademiaFilter(): Observable<iGraficoFilter>{
        return this.http
        .get<iGraficoFilter>(this.apiURL)
    }

}