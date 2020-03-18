import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputpasswordmodalRetryPageRoutingModule } from './inputpasswordmodal-retry-routing.module';

import { InputpasswordmodalRetryPage } from './inputpasswordmodal-retry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputpasswordmodalRetryPageRoutingModule
  ],
  declarations: [InputpasswordmodalRetryPage]
})
export class InputpasswordmodalRetryPageModule {}
