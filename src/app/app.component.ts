import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import * as L from 'leaflet';

declare var require: any

delete (<any>L.Icon.Default.prototype)._getIconUrl;

window.onload = () => {
	console.log("onload");
	var map = L.map('mapid').setView([-19.956, -44.04], 13);
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);

var marker =	L.marker([-19.956, -44.04],).addTo(map)
		.bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

    L.marker([-20.956, -44.04],).addTo(map);
    /*
    var circle = L.circle([-19.956, -44.04], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 500
  }).addTo(map);
*/


   // var marker = L.marker([-19.956, -44.04]).addTo(map);

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appmapa';



}



