import { Component } from '@angular/core';
import { NavController, IonicPage, App, MenuController } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { StoreDetailPage } from '../store-detail/store-detail';
import { StoreProvider } from '../../providers/store/store';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  stores:any;

  constructor(
    public navCtrl: NavController, 
    public storeProvider:StoreProvider,
    public app:App,
    private menuCtrl:MenuController
  ) 
  {
    menuCtrl.enable(true);
    this.stores= storeProvider.getAll();
  }

  /*
  method die gefired wordt wanneer de pagina klaar is
  */
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  showDetail(item:any){
    this.navCtrl.push(StoreDetailPage,item);
  }

  cancelOrder(){
    console.log("Cancelling order");
    this.app.getRootNav().setRoot(LoginPage);
  }
}
