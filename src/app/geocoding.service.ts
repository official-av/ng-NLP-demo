import {Injectable} from '@angular/core';
import {} from '@types/googlemaps';

declare var google: any;

@Injectable()
export class GeocodingService {

  constructor() {
  }

  getLatLong(address: string) {
    var geocoder = new google.maps.Geocoder();
    return new Promise((resolve, reject) => {
      geocoder.geocode({'address': address}, function (results, status) {
        if (status.toString() === 'OK') {
          let location = results[0].geometry.location;
          let lat = location.lat();
          let long = location.lng();
          var obj = {lat: lat, long: long};
          resolve(obj);
        } else {
          reject('Geocode was not successful for the following reason: ' + status);
        }
      });
    })
  }
}
