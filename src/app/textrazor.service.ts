import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import * as textRazor from "./textrazor-api.config";


@Injectable()
export class TextrazorService {

  constructor(private httpClient: HttpClient) {
  }

  sendText(text: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'x-textrazor-key': textRazor.config.API_KEY
    });
    let body = new URLSearchParams();
    body.set("extractors", "entities");
    body.set('text', text);
    return new Promise((resolve, reject) => {
      this.httpClient.post('/api', body.toString(), {headers: headers}).subscribe((response: Response) => {
        let res: any = response;
        console.log('oy');
        let entities = res.response.entities;
        console.log(entities);
        let places = [];
        let links = [];
        for (let entity of entities) {
          if (entity.type && entity.type.indexOf("Place") != -1)
            places.push(entity.matchedText);
          let obj = {name: entity.matchedText, link: entity.wikiLink};
          links.push(obj);
        }
        console.log(links);
        let obj2 = {places: places, links: links};
        resolve(obj2);
      }, (error: any) => {
        reject('error! try again by adding some text');
      });
    });
  }
}
