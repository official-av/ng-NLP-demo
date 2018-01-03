import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {TextrazorService} from "./textrazor.service";
import {GeocodingService} from "./geocoding.service";
import {AgmCoreModule} from "@agm/core";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBbiQ0I4vJ1NYcXm2a26H7rXp92G0SOxHE'
    })
  ],
  providers: [TextrazorService, GeocodingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
