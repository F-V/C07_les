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



@NgModule({
  declarations: [
    MyApp,
    StoreDetailPage,
    LoginPage,
    OrderTabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    StoreProvider
  ]
})
export class AppModule {}
