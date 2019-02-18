import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { FavoritosPage } from '../favoritos/favoritos';
import { BuscarPage } from '../buscar/buscar';
import { ProductoPage } from '../producto/producto';

/**
 * Generated class for the PetsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pets',
  templateUrl: 'pets.html',
})
export class PetsPage {
  pets=[];
  FPage=FavoritosPage;
  BPage=BuscarPage;
  PPage=ProductoPage;

  constructor(public navCtrl: NavController,public http:HttpClient) {
    this.http.get('/v1/nga/api/v1/public/klfst?&category=4020&offset=1&lim=29&lang=es')
    .subscribe
    (data => { 
    if (data.hasOwnProperty('list_ads'))
    {
      this.pets = data.list_ads;
    }
    
    }, 
     error => {console.log(JSON.stringify(error));
     });

  }
  favoritos()
  {
    this.navCtrl.push(this.FPage);
  }
  buscar()
  {
    this.navCtrl.push(this.BPage, {bp:this.pets});
  }
  verp(pet)
  {
    this.navCtrl.push(this.PPage,{vidcon:pet});
  }

}
