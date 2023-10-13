import { Component } from '@angular/core';
import * as L from 'leaflet';
import { AddressResponse, iMarker } from './interface/mapa.model';
import { MapaService } from './services/mapa.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  markerData!: iMarker[];

  private map!: L.Map;

  private centroid: L.LatLngExpression = [-3.739831, -38.529099];

  private userLocationMarker!: L.Marker;


  constructor(private mapaService: MapaService) {}

  ngOnInit(): void {
    this.initMap();
    this.getUserLocation();

    let req: iMarker = {
      address: ['Rua Joaquim Sa,20', 'Rua Joaquim sa,55'],
    };

    this.mapaService.sendMarkerDados(req).subscribe({
      next: (res) => {
        if (res.result.length > 0) {
          let array = res.result;
          array.forEach((object) => {
            let ResponseBody = {
              latitude: object.latitude,
              longitude: object.longitude,
              displayName: object.displayName,
            };
            L.marker([ResponseBody.latitude!, ResponseBody.longitude!])
              .addTo(this.map)
              .bindPopup(ResponseBody.displayName!)
              .openPopup();
          });
        }

        console.log(res);
      },
      error: (error) => {
        console.log(error);
      },
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

  private getUserLocation(): void {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          if (!this.userLocationMarker) {
            this.userLocationMarker = L.marker([lat, lng])
              .addTo(this.map)
              .bindPopup('Seu Local')
              .openPopup();
          } else {
            this.userLocationMarker.setLatLng([lat, lng]);
          }

          this.map.setView([lat, lng], 15);
        },
        (error) => {
          console.error('Erro na localização:', error);
        }
      );
    }
}

  
}
