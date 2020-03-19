import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TokensuccessModalPageRoutingModule } from './tokensuccess-modal-routing.module';

import { TokensuccessModalPage } from './tokensuccess-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TokensuccessModalPageRoutingModule
  ],
  declarations: [TokensuccessModalPage]
})
export class TokensuccessModalPageModule {}
