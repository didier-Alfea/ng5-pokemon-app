import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PokemonsModule } from './pokemons/pokemons.module';

// Import du module http
import { HttpClientModule } from '@angular/common/http';

//
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }from './in-memory-data.service';

import { AppComponent }           from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';


@NgModule({
  imports:      [
    // Ordre est important
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    PokemonsModule,
    AppRoutingModule
   ],
  declarations: [
     AppComponent,
     PageNotFoundComponent
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
