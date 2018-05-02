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


}
