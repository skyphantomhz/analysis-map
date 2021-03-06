import { Injectable } from '@angular/core';
import * as GeoFire from "geofire"
import { BehaviorSubject } from "rxjs/BehaviorSubject";
@Injectable()
export class GeoService {
  dbRef: any;
  geoFire: any;
  hits = new BehaviorSubject([])
  constructor() {
    this.geoFire = new GeoFire(this.dbRef.$ref);
  }
  
  setLocation(key: string, coords: Array<number>){
    this.geoFire.set(key, coords)
    .then(_ => console.log('location updated'))
    .catch(err => console.log(err))
  }
  // getAppointments(): FirebaseListObservable<Appointment[]>{
  //   return this.db.list('/appointmentDetail');
  // }

  getLocations(radius: number, coords:Array<number>){
    this.geoFire.query({
      center: coords,
      radius: radius
    })
    .on('key_entered', (key, location, distance) => {
      let hit = {
        location: location,
        distance: distance
      }

      let currentHits = this.hits.value;
      currentHits.push(hit);
      this.hits.next(currentHits);
    });
  }
  
}
