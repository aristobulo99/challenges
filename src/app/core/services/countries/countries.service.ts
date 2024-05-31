import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://nominatim.openstreetmap.org/reverse';

  constructor(
    private http: HttpClient
  ) { }

  async getCountriesByLatLng(lat: number, lng: number): Promise<Countries[]>{
    const resul =  await this.getCountryFromCoordinates(lat, lng);
    const countries: Countries[] = [];
    const url = `https://restcountries.com/v3.1/alpha/${resul.address.country_code.toLowerCase()}`;
    const resp = await  lastValueFrom(
      this.http.get<Countries[]>(url)
    );
    return resp;

  }

  async getCountryFromCoordinates(lat: number, lon: number) {
    const url = `${this.apiUrl}?lat=${lat}&lon=${lon}&format=json`;
    return await lastValueFrom(
      this.http.get<Address>(url)
    );
  }
}

export interface Countries {
  borders: string[],
  flags: {svg: string},
  area: number,
  altSpellings: string[],
  maps: {
    googleMaps: string,
    openStreetMaps: string
  }
}

export interface Address {
  address: {
    country_code: string
  }
}
