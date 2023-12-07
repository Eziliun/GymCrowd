import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take, tap } from 'rxjs';
import { AddressResponse, AddressSavedResponse, iMarker, markerRequest, markerSaveRequest } from '../interface/mapa.model';

@Injectable({
    providedIn: 'root'
})
export class MapaService{
    private apiURL = 'http://192.168.203.4:8080/v1/address'; //URL da API
    private apiURLSAVE = 'http://192.168.203.4:8080/v1/local'; //URL da API

    constructor(
        private http: HttpClient,
        
    ){}

    getMarkerDados(): Observable<iMarker>{
        return this.http
        .get<iMarker>(this.apiURL)
        .pipe(tap(console.log), take(1));;
    }

    sendMarkerDados(dataEndereco: markerRequest): Observable<AddressResponse>{
        return this.http
        .post<AddressResponse>(this.apiURL, dataEndereco)
    }

    sendMarkerSaveDados(dataEndereco: markerSaveRequest): Observable<AddressSavedResponse>{
        return this.http
        .post<AddressSavedResponse>(this.apiURLSAVE, dataEndereco)
    }
}