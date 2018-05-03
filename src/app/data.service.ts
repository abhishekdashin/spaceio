import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class DataService {

  result: any;

  constructor(private _http: HttpClient) { }

  getHueData(on: boolean) {
    return this._http.get('/api/hue/' + on)
      .pipe();
  }

  getTemperature() {
    return this._http.get('/api/temperature').pipe();
  }

  getHumidity() {
    return this._http.get('/api/humidity').pipe();
  }

  getACMode() {
    return this._http.get('/api/ac').pipe();
  }

  setTemperature(temperature: number) {
    return this._http.get('/api/actemp/' + temperature).pipe();
  }


}
