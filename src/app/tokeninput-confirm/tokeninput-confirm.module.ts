import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TokeninputConfirmPageRoutingModule } from './tokeninput-confirm-routing.module';

import { TokeninputConfirmPage } from './tokeninput-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TokeninputConfirmPageRoutingModule
  ],
  declarations: [TokeninputConfirmPage]
})
export class TokeninputConfirmPageModule {}
