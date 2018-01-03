import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {TextrazorService} from "./textrazor.service";
import {GeocodingService} from "./geocoding.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text: string = '';
  places = [];
  lat: number;
  long: number;
  showMap = false;

  constructor(private textrazorService: TextrazorService, private geoService: GeocodingService) {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.textrazorService.sendText(this.text).then((places: string[]) => {
      this.places = places;
    });
  }

  showPlace(address: string) {
    this.geoService.getLatLong(address).then((location: any) => {
      this.lat = location.lat;
      this.long = location.long;
      console.log(this.lat + " " + this.long);
    }).then(() => {
      this.showMap = true;
    }).catch((err: string) => {
      if (err)
        console.log(err);
    })
  }
}
