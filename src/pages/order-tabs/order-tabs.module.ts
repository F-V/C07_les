import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderTabsPage } from './order-tabs';

@NgModule({
  declarations: [
    OrderTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderTabsPage),
  ]
})
export class OrderTabsPageModule {}
