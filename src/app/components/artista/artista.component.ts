import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';



@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista:any = {};
  top:any = {};

  constructor(private activate:ActivatedRoute, private service:SpotifyService) { }

  ngOnInit() {

    this.activate.params.map(parametros => parametros['id']).subscribe(
      id => {
        this.service.getArtista(id).subscribe(
          data => {
            this.artista = data;
            console.log(this.artista);
          }
        );

        this.service.getTop(id).subscribe(
          data => {
            this.top = data;
            console.log(this.top.tracks);
          }
        )

      }
    )

  }

}
