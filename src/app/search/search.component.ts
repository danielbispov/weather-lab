import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../_services/weather.service';
import { City } from '../_models/city';
import { Subject} from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  COUNTRY_IMG_BASE_PATH = 'http://openweathermap.org/images/flags/';
  WEATHER_IMG_BASE_PATH = 'http://openweathermap.org/img/w/';
  cities: City[] = [];
  private subject: Subject<string> = new Subject();

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.subject.pipe(debounceTime(200)).subscribe(searchValue => {
      this.search(searchValue);
    });
  }

  onKeyUp(name: string) {
    this.subject.next(name);
  }

  search(name) {
    this.cities = [];
    if (name !== '') {
      this.weatherService.getCitiesByName(name)
        .then((result) => {
          if (result.status < 400) {
            this.cities = result.json().list;
          }
        });
    } else {
      this.cities = [];
    }
  }
}
