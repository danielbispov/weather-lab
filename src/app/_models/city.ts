import {Main} from './main';
import {Sys} from './sys';
import {Weather} from './weather';

export class City {
  id: number;
  name: string;
  main: Main;
  date: number;
  sys: Sys;
  weather: Weather;
}
