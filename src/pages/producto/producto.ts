import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';


@IonicPage()
@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html',
})
export class ProductoPage {
  vidcon = {};
  imgs=[];
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public fav: FavoritosProvider) {
    this.vidcon= this.navParams.get('vidcon');
    if (this.vidcon.ad.hasOwnProperty('images'))
    {
      this.imgs=this.vidcon.ad.images;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoPage');
  }

  favoritos(vidcon)
  {
   this.fav.addFavoritos(vidcon);
  }

}
