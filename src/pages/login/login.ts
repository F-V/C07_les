import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { OrderTabsPage } from '../order-tabs/order-tabs';
import { UserServiceProvider } from '../../providers/user-service/user-service';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {
    email: "",
    password: ""
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userService: UserServiceProvider,
    private menuCtrl:MenuController
  ) {
    menuCtrl.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  loginWithGoogle(){
    this.userService.loginWithGoogle();
  }
  login() {
    console.log('Tried to login with.',this.user);
    this.userService.login(this.user.email, this.user.password)
      .then((result) => {
        console.log("UserService replied with",result);
        if (this.userService.isLoggedIn) {
          // if auth success, go to home
          this.navCtrl.setRoot(OrderTabsPage);
        }
      });
  }
}
