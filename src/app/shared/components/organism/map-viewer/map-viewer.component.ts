import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import * as L from 'leaflet';
import { Countries, CountriesService } from 'src/app/core/services/countries/countries.service';
import { DialogService } from 'src/app/core/services/dialog/dialog.service';
import { LoadingService } from 'src/app/core/services/loading/loading.service';

@Component({
  selector: 'app-map-viewer',
  templateUrl: './map-viewer.component.html',
  styleUrls: ['./map-viewer.component.scss']
})
export class MapViewerComponent implements OnInit {

  public map: L.Map | undefined;

  constructor(
    private countriesService: CountriesService,
    private dialogService: DialogService,
    private loadingService: LoadingService
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
    this.loadingService.activeLoading = true;
    try{
      const latlng: L.LatLng = event.latlng;
      const resp: Countries[] = await this.countriesService.getCountriesByLatLng(latlng.lat, latlng.lng);
      this.dialogService.openDialog({map: resp});
    }catch(e){
      console.log(e);
    }
    this.loadingService.activeLoading = false;
  }


}
