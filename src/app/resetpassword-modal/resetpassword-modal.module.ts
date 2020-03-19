import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetpasswordModalPageRoutingModule } from './resetpassword-modal-routing.module';

import { ResetpasswordModalPage } from './resetpassword-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetpasswordModalPageRoutingModule
  ],
  declarations: [ResetpasswordModalPage]
})
export class ResetpasswordModalPageModule {}
