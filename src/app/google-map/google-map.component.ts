import { Component, OnInit } from '@angular/core';
import { GeoService } from "../services/geo.service";
import { Router } from "@angular/router";
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';
import { mapstyle } from './mapstyle'
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
  mapStyle = mapstyle
  lat: number;
  lng: number;
  markers: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.markers = db.list('users').valueChanges();
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position =>{
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
    })
  }
}
  ngOnInit() {
    this.getUserLocation();
  }
  getUserLocation() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position =>{
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      })
    }
  }
}
