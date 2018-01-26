import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas:any = {artists:{}, items:[]};
  termino:string = "";

  constructor(private serviceSpoti:SpotifyService) { }

  ngOnInit() {

  }

  buscarArtista(){

    this.serviceSpoti.getArtistas(this.termino).subscribe(
      data => {
        this.artistas = data;
        console.log(this.artistas.artists.items);
      }

    );

  }

} 
