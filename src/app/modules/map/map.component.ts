import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { MapaService } from './services/mapa.service';
import { iMarker, iMarkerSave, markerRequest } from './interface/mapa.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit{
  markerData!: iMarker[];

  markerDataSave!: iMarkerSave[];

  private map!: L.Map;

  private centroid: L.LatLngExpression = [-3.739831, -38.529099];

  private userLocationMarker!: L.Marker;

  constructor(
    private mapaService: MapaService,
    ) {}


  
  ngOnInit(): void {
    this.initMap();
    this.postEnderecos();
    this.adicionarMarcador();
    // this.getUserLocation();
    
  }

  postEnderecos() {
    const addresses = [
      //SmartFit
      'Av. Rui Barbosa, 2727',

      //   //PinkFit
      'Av. Senador Virgílio Távora, 2201',

      // //RedFit
      'Av. Senador Virgílio Távora, 2125',

      // PurpleFit
      'R. Joaquim Sá, 20 ',
    ];
    addresses.forEach((address) => {
      let req: markerRequest = {
        address: address,
      };

      this.mapaService.sendMarkerDados(req).subscribe({
        next: (res) => {
          if (res.result.length > 0) {
            let array = res.result;
            array.forEach((object) => {
              let ResponseBody = {
                latitude: object.latitude,
                longitude: object.longitude,
                address: {
                  road: object.address.road,
                  residential: object.address.residential,
                  suburb: object.address.suburb,
                  city: object.address.city,
                  state: object.address.state,
                  municipality: object.address.municipality,
                  country: object.address.country,
                  countryCode: object.address.countryCode,
                  houseNumber: object.address.houseNumber,
                  postCode: object.address.postcode,
                },
              };
              L.marker([ResponseBody.latitude!, ResponseBody.longitude!])
                .addTo(this.map)
                .bindPopup(
                  ResponseBody.address.road +
                    ', ' +
                    ResponseBody.address.suburb +
                    ', ' +
                    ResponseBody.address.city +
                    ', ' +
                    ResponseBody.address.state
                );
            });
          }

          console.log(res);
        },
        error: (error) => {
          console.log(error);
        },
      });
    });
  }
  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 12,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 10,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
  }


  adicionarMarcador(){
    L.marker([-3.747427554383683, -38.511345775788264]).addTo(this.map)
    .bindPopup('Casinha')
    .openPopup();
  }


  postEnderecosSalvos(dadoForm: any) {
    this.mapaService.sendMarkerSaveDados(dadoForm).subscribe({
      next: (res) => {
        let ResponseBody: any = {
          enderecoCompleto: res.result.enderecoCompleto,
          nomeLocal: res.result.nomeLocal,
          latitude: res.result.latitude,
          longitude: res.result.longitude,
        };
        L.marker([
          parseFloat(ResponseBody.latitude!),
          parseFloat(ResponseBody.longitude!),
        ]) 
        .addTo(this.map)
          .bindPopup(ResponseBody.nomeLocal);        
      },
    });
  }



  // private getUserLocation(): void {
  //   if ('geolocation' in navigator) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const lat = position.coords.latitude;
  //         const lng = position.coords.longitude;

  //         if (!this.userLocationMarker) {
  //           this.userLocationMarker = L.marker([lat, lng])
  //             .addTo(this.map)
  //             .bindPopup('Seu Local')
  //             .openPopup();
  //         } else {
  //           this.userLocationMarker.setLatLng([lat, lng]);
  //         }

  //         this.map.setView([lat, lng], 15);
  //       },
  //       (error) => {
  //         console.error('Erro na localização:', error);
  //       }
  //     );
  //   }
  // }
}
