import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import * as L from 'leaflet';
import { Countries, CountriesService } from 'src/app/core/services/countries/countries.service';
import { DialogService } from 'src/app/core/services/dialog/dialog.service';

@Component({
  selector: 'app-map-viewer',
  templateUrl: './map-viewer.component.html',
  styleUrls: ['./map-viewer.component.scss']
})
export class MapViewerComponent implements OnInit {

  public map: L.Map | undefined;

  constructor(
    private countriesService: CountriesService,
    private dialogService: DialogService
  ){
  }

  ngOnInit(): void {
    this.initializeMap();
  }

  private initializeMap(): void{
    this.map = L.map('map').setView([0,0],2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    this.map.on('click', (e) => {
      this.onMapClick(e);
    });
  }

  private async onMapClick(event: L.LeafletMouseEvent): Promise<void> {
    const latlng: L.LatLng = event.latlng;
    const resp: Countries[] = await this.countriesService.getCountriesByLatLng(latlng.lat, latlng.lng);
    console.log(latlng, resp[0]);
    this.dialogService.openDialog({map: resp});
  }


}
