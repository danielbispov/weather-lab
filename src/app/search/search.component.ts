import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather';
import {Observable, Subject} from 'rxjs';
import {debounce, debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  COUNTRY_IMG_BASE_PATH = 'http://openweathermap.org/images/flags/';
  WEATHER_IMG_BASE_PATH = 'http://openweathermap.org/img/w/';
  weathers: Weather[] = [];
  weather: Weather;
  private subject: Subject<string> = new Subject();

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weather = new Weather();
    this.subject.pipe(debounceTime(200)).subscribe(searchValue => {
      this.search(searchValue);
    });
  }

  onKeyUp(name: string) {
    this.subject.next(name);
  }

  search(name) {

    this.weathers = [];
    if (name !== '') {
      this.weatherService.getCitiesByName(name)
        .then((result) => {
          if (result.status < 400) {
            console.log(result.json().list);
            this.weathers = result.json().list;
            console.log(this.weathers);
            result.json().list.map((item) => {

              const weather: Weather = new Weather();
              weather.id = item.id;
              weather.name = item.name;
              weather.country = item.sys.country;
              weather.countryImgPath = `${this.COUNTRY_IMG_BASE_PATH}${item.sys.country}.png`.toLocaleLowerCase();
              weather.weatherImgPath = `${this.WEATHER_IMG_BASE_PATH}${item.weather[0].icon}.png`.toLocaleLowerCase();
              weather.temp = item.main.temp;
              weather.temp_min = item.main.temp_min;
              weather.temp_max = item.main.temp_max;
              weather.sunrise = item.sys.sunrise;
              weather.sunset = item.sys.sunset;
              weather.description = item.weather[0].description;
              this.weathers.push(weather);
            });
          }
        });
    } else {
      this.weathers = [];
    }
  }
}
