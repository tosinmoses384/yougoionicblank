import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EndtripPageRoutingModule } from './endtrip-routing.module';

import { EndtripPage } from './endtrip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EndtripPageRoutingModule
  ],
  declarations: [EndtripPage]
})
export class EndtripPageModule {}
