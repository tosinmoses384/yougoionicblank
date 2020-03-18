import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputpasswordmodalPageRoutingModule } from './inputpasswordmodal-routing.module';

import { InputpasswordmodalPage } from './inputpasswordmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputpasswordmodalPageRoutingModule
  ],
  declarations: [InputpasswordmodalPage]
})
export class InputpasswordmodalPageModule {}
