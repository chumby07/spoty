import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SpotifyService {

  token:string = "BQAvbjESCVpd3QuWbgS2IE_DDH3QTzNGe0oipiFDs0FNfzarYppRchN5v5ualmaaGEJaf3XQqjm-BZZvW-Q";
  urlBusqueda: string = "https://api.spotify.com/v1/search";
  urlArtista: string = "https://api.spotify.com/v1/artists";

  constructor(private http: Http) { }

  getArtistas(termino: string): Observable<any[]> {

    let headers = new Headers();

    headers.append('authorization', 'Bearer ' + this.token);

    let query = `?q=${termino}&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get(url, { headers }).map(
      res => res.json()
    );

  }

  getArtista(id: string): Observable<any[]> {

    let headers = new Headers();

    headers.append('authorization', 'Bearer ' + this.token);

    let query = `/${id}`;
    let url = this.urlArtista + query;

    return this.http.get(url, { headers }).map(
      res => res.json()
    );

  }

  getTop(id: string): Observable<any[]> {
    
        let headers = new Headers();
    
        headers.append('authorization', 'Bearer ' + this.token);
    
        let query = `/${id}/top-tracks?country=US`;
        let url = this.urlArtista + query;
    
        return this.http.get(url, { headers }).map(
          res => res.json()
        );
    
      }

}
