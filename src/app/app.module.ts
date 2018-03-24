import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { GoogleMapComponent } from './google-map/google-map.component'
import {GeoService} from './services/geo.service'
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2';  
@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [GeoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
