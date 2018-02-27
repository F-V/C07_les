import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { StoreDetailPage } from '../pages/store-detail/store-detail';

import { AuthProvider } from '../providers/auth/auth';
import { StoreProvider } from '../providers/store/store';
import { OrderTabsPage } from '../pages/order-tabs/order-tabs';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { UserServiceProvider } from '../providers/user-service/user-service';

var config = {
  apiKey: "AIzaSyBTe_xUBV4Tv0I3Cqfo7e6pTZguH4yuq_Q",
  authDomain: "c07les.firebaseapp.com",
  databaseURL: "https://c07les.firebaseio.com",
  projectId: "c07les",
  storageBucket: "c07les.appspot.com",
  messagingSenderId: "725600558397"
};

@NgModule({
  declarations: [
    MyApp,
    StoreDetailPage,
    LoginPage,
    OrderTabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StoreDetailPage,
    OrderTabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    StoreProvider,
    UserServiceProvider
  ]
})
export class AppModule {}
