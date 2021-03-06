import { Component, SystemJsNgModuleLoader, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Icons } from 'src/icons/icons.model';
import { GeoServiceService } from './geo-service.service'
import { GeoResponse } from './interfaces/geo-model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private objService: GeoServiceService) {}
  response: GeoResponse;
  title = 'appmap';
  private map: L;
  private marcador1 =  L.marker([-19.956, -44.04],{icon: Icons.getGreen()});
  private marcador2 =  L.marker([-20.956, -44.04],{icon: Icons.getRed()});
  private marcador3 =  L.marker([-19.856, -44.10],{icon: Icons.getOrange()});
  private marcador4 =  L.marker([-19.956, -44.04],{icon: Icons.getRed()});
  private marcador5 =  L.marker([-20.956, -44.04],{icon: Icons.getRed()});
  private marcador6 =  L.marker([-19.856, -44.10],{icon: Icons.getRed()});
  private layer1 = L.layerGroup([this.marcador1, this.marcador2, this.marcador3]);
  private layer2 = L.layerGroup([this.marcador4, this.marcador5, this.marcador6]);
  private statusCLick: boolean = false;

  ngOnInit(): void {

    var mapboxUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
    var mapboxAttribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
    this.map = L.map('mapid',{
    layers:[this.layer1, this.layer2]});
    this.map.setView([-19.956, -44.04], 13);
    L.tileLayer(mapboxUrl, {
      attribution: mapboxAttribution
    }).addTo(this.map);
    this.map.removeLayer(this.layer2);


    this.objService.getGeo().subscribe( (returned: GeoResponse[]) => {

      console.log("Inside the arrow function");
      console.log(returned['response']);
    },
    (err) => {
      console.log('Erro');
      console.log(err)});
/*
    this.data.enviarLogin(bodyDaRequisicao).subscribe( ( objetoDeRetornoDoMetodo:Medico[] ) => {
      this.guardaDeRota.rotaLiberada = true;
      this.data.nomeMedico = objetoDeRetornoDoMetodo['nome'];        //Passa o nome e email do medico para o serviço para disponibiliza-los em qualquer compoente que precise deles
      this.data.emailMedico = objetoDeRetornoDoMetodo['email'];
      this.data.medicoId = objetoDeRetornoDoMetodo['id'];
      this.router.navigateByUrl('dash'); //Este metodo muda o componente, neste caso muda para home
    });
*/
  }

  statusClick(){
    console.clear();
     if(!this.statusCLick){
      this.statusCLick = !this.statusCLick;
      this.map.removeLayer(this.layer1);
      this.map.removeLayer(this.layer2);
      this.map.addLayer(this.layer1);
    }
    else{
      this.statusCLick = !this.statusCLick;
      this.map.removeLayer(this.layer1);
      this.map.removeLayer(this.layer2);
      this.map.addLayer(this.layer2);
    }

 }

 onLayer1(){
  this.map.removeLayer(this.layer1);
  this.map.removeLayer(this.layer2);
  this.map.addLayer(this.layer1);
 }
 onLayer2(){
  this.map.removeLayer(this.layer1);
  this.map.removeLayer(this.layer2);
  this.map.addLayer(this.layer2);
 }



}



