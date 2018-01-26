import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FeatureRoutingModule } from './app.routes';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';



//servicios
import { SpotifyService } from './services/spotify.service';



import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SinfotoPipe } from './pipe/sinfoto.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    SinfotoPipe
  ],
  imports: [
    BrowserModule,
    FeatureRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
