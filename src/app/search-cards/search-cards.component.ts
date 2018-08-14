import {Component, Input, OnInit} from '@angular/core';
import {Weather} from '../weather';

@Component({
  selector: 'app-search-cards',
  templateUrl: './search-cards.component.html',
  styleUrls: ['./search-cards.component.css']
})
export class SearchCardsComponent implements OnInit {

  @Input() weathers: Weather[];

  constructor() { }

  ngOnInit() {
  }

}
