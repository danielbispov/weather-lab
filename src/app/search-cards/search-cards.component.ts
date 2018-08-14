import {Component, Input, OnInit} from '@angular/core';
import {City} from '../_models/city';

@Component({
  selector: 'app-search-cards',
  templateUrl: './search-cards.component.html',
  styleUrls: ['./search-cards.component.css']
})
export class SearchCardsComponent implements OnInit {

  @Input() cities: City[];

  constructor() { }

  ngOnInit() {
  }

}
