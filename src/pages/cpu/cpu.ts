import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosPage } from '../favoritos/favoritos';
import { BuscarPage } from '../buscar/buscar';
import { ProductoPage } from '../producto/producto';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the CpuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cpu',
  templateUrl: 'cpu.html',
})
export class CpuPage {
  cpus=[];
  FPage=FavoritosPage;
  BPage=BuscarPage;
  PPage=ProductoPage;

  constructor(public navCtrl: NavController,public http:HttpClient) {
    this.http.get('/v1/nga/api/v1/public/klfst?&category=5020&offset=1&lim=29&lang=es')
    .subscribe
    (data => { 
    if (data.hasOwnProperty('list_ads'))
    {
      this.cpus = data.list_ads;
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
    this.navCtrl.push(this.BPage, {bp:this.cpus});
  }
  verp(cpu)
  {
    this.navCtrl.push(this.PPage,{vidcon:cpu});
  }

}
