import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';


declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  latitude: any; // current location latitude
  longitude: any; // current location longitude
  distanceinMetres: any;
  constructor(public platform: Platform, public geo: Geolocation) {

    this.ionViewDidLoad()
  }

  ionViewDidLoad() {
    this.geo.getCurrentPosition().then(pos => {
      this.latitude = 30.7241251;
      this.longitude = 76.8469306;
      // var lat = this.latitude;
      // var lng = this.longitude;
      // var minDistance = 100;
      // var maxDistance = 1000;
      // const m = 0.7339285;
      var gps1 = new google.maps.LatLng(this.latitude, this.longitude); // current location
      var gps2 = new google.maps.LatLng(30.721984054701952,76.8402105591297);
      console.log(gps1);
      console.log(gps2);
      var distanceinMetres = google.maps.geometry.spherical.computeDistanceBetween(gps1, gps2);
      console.log(distanceinMetres);
      // var locations = [];
      // let rand = function (min, max) {
      //   return Math.random() * (max - min) + min;
      // }
      // var maxCoord = minDistance * m + 0.9; // equation to convert distance into coodinates
      // var minCoord = maxDistance * m + 0.9;
      // maxCoord = maxCoord / 100000;
      // minCoord = minCoord / 100000;
      // var j;
      // var num = 5;
      // var coords = new Array();
      // for (j = 0; j < num; j++) {
      //   coords.push(new google.maps.LatLng((this.latitude + rand(minCoord, maxCoord)), (this.longitude + rand(minCoord, maxCoord))));
      //   coords.push(new google.maps.LatLng((this.latitude + rand(-minCoord, -maxCoord)), (this.longitude + rand(minCoord, maxCoord))));
      //   coords.push(new google.maps.LatLng((this.latitude + rand(minCoord, maxCoord)), (this.longitude + rand(-minCoord, -maxCoord))));
      //   coords.push(new google.maps.LatLng((this.latitude + rand(-minCoord, -maxCoord)), (this.longitude + rand(-minCoord, -maxCoord))));
      // }
      // var distances = [];
      // for (j = 0; j < num * 4; j++) {
      //   distances.push(google.maps.geometry.spherical.computeDistanceBetween(gps1, coords[j]));
      // }
      // console.log(coords);
      // console.log(distances);
    }).catch(err => console.log(err));
  }
}
