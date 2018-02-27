import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { StoreDetailPage } from '../store-detail/store-detail';
import { StoreProvider } from '../../providers/store/store';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  stores:any;

  constructor(
    public navCtrl: NavController, 
    public storeProvider:StoreProvider
  ) 
  {
    this.stores= storeProvider.getAll();
  }

  /*
  method die gefired wordt wanneer de pagina klaar is
  */
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  openPage(){
    // een nieuwe page toevoegen aan de navstack en erna navigeren
    this.navCtrl.push(LoginPage);
  }
  showDetail(item:any){
    this.navCtrl.push(StoreDetailPage,item);
  }
}
