import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SpotifyService {

  
  urlBusqueda:string = "https://api.spotify.com/v1/search";

  constructor(private http:Http) { }

  getArtistas(termino:string):Observable<any[]>{

    let headers = new Headers();
    
    headers.append('authorization', 'Bearer BQAPYRhxcxjTBsHlxZDpcD4_Xq-GCOzgcpKJcx-vGqAhGuk3brb3UmeOOF5X1qpqTrUdh5RMGqXg12hXGHI');

    let query = `?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get(url, { headers }).map(
      res => res.json()
    );

  }

}
