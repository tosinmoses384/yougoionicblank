import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyridesPageRoutingModule } from './myrides-routing.module';

import { MyridesPage } from './myrides.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyridesPageRoutingModule
  ],
  declarations: [MyridesPage]
})
export class MyridesPageModule {}
