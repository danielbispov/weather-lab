import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, ResponseContentType } from '@angular/http';
import { City } from '../_models/city';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  private API_BASE = 'https://api.openweathermap.org/data/2.5/';
  private APP_ID = '76d1b43ba3695cfae59aa9f7dc9b4877';
  private API_PARAMS = `&appid=${this.APP_ID}&type=like&units=metric`;

  constructor(private http: Http) {
  }

  public getCitiesByName(name: string) {
    return this.http.get(`${this.API_BASE}find?q=${name}${this.API_PARAMS}`, this.setHeaders())
      .toPromise()
      .then(response => {
        // ts = JSON.parse(JSON.stringify(response));
        return response;
      });
  }

  private setHeaders() {
    const headers = new Headers();
    return new RequestOptions({ headers: headers });
  }
}
