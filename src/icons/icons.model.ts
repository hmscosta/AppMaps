import * as L from 'leaflet';

export class Icons{


 static getGreen(): L {
   let greenIcon = L.icon({
      iconUrl:   'assets/leaf-green.png',
      shadowUrl: 'assets/leaf-shadow.png',
      iconSize:     [38, 95], // size of the icon
      shadowSize:   [50, 64], // size of the shadow
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
      });
    return greenIcon;
  }

  static getRed(): L {
    let redIcon = L.icon({
       iconUrl:   'assets/leaf-red.png',
       shadowUrl: 'assets/leaf-shadow.png',
       iconSize:     [38, 95], // size of the icon
       shadowSize:   [50, 64], // size of the shadow
       iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
       shadowAnchor: [4, 62],  // the same for the shadow
       popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
       });
     return redIcon;
   }

   static getOrange(): L {
    let orangeIcon = L.icon({
       iconUrl:   'assets/leaf-orange.png',
       shadowUrl: 'assets/leaf-shadow.png',
       iconSize:     [38, 95], // size of the icon
       shadowSize:   [50, 64], // size of the shadow
       iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
       shadowAnchor: [4, 62],  // the same for the shadow
       popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
       });
     return orangeIcon;
   }


 }
