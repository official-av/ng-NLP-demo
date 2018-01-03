import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {TextrazorService} from "./textrazor.service";
import {GeocodingService} from "./geocoding.service";
import {NgProgress} from "ngx-progressbar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text: string = '';
  places = [];
  links = [];
  lat: number;
  long: number;
  showMap = false;

  constructor(private textrazorService: TextrazorService, private geoService: GeocodingService, public ngProgress: NgProgress) {
  }

  onSubmit(form: NgForm) {
    this.ngProgress.start();
    console.log(form.value);
    this.textrazorService.sendText(this.text).then((obj: any) => {
      this.places = obj.places;
      this.links = obj.links;
    }).then(() => {
      this.ngProgress.done();
    }).catch((err: any) => {
      if (err)
        console.log(err);
      this.ngProgress.done();
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
