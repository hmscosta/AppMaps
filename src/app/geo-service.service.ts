import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeoResponse } from './interfaces/geo-model'

@Injectable({
  providedIn: 'root'
})
export class GeoServiceService {

  API_URL = "https://run.mocky.io/v3/b17aa475-1af9-40a8-9f2c-ba479a493afb";


  constructor(private http: HttpClient) { }


  getGeo(){
    return this.http.get<[GeoResponse[]]>(this.API_URL);
  }




}




