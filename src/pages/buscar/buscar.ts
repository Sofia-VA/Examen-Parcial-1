import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductoPage } from '../producto/producto';

/**
 * Generated class for the BuscarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-buscar',
  templateUrl: 'buscar.html',
})
export class BuscarPage {

  bp=[];
  items=[];
  PPage=ProductoPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.bp =this.navParams.get('bp');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  getItems(ev: any)
  {
    console.log(ev.target.value);
    this.items = this.bp.filter(vidcon=> 
      { return vidcon.ad.subject.toLowerCase().includes(ev.target.value.toLowerCase()) 
      });
  }

  Ver(item)
  {
    this.navCtrl.push(this.PPage,{vidcon:item});
  }
}
