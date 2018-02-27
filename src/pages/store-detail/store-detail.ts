import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StoreDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-store-detail',
  templateUrl: 'store-detail.html',
})
export class StoreDetailPage {
  store:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.store=navParams.data;
    console.log("StoreDetailPage store prop",this.store)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreDetailPage');
  }

}
