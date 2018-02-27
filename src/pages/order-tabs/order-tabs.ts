import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the OrderTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-tabs',
  templateUrl: 'order-tabs.html'
})
export class OrderTabsPage {

  homeRoot = 'HomePage'
  menuRoot = 'MenuPage'
  cartRoot = 'CartPage'


  constructor(public navCtrl: NavController) {}

}
