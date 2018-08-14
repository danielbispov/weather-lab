import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { SearchCardsComponent } from './search-cards/search-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DetailComponent,
    SearchCardsComponent,
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
