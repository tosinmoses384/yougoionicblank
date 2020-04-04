import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Signupgrid1PageRoutingModule } from './signupgrid1-routing.module';

import { Signupgrid1Page } from './signupgrid1.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    Signupgrid1PageRoutingModule
  ],
  declarations: [Signupgrid1Page]
})
export class Signupgrid1PageModule {}
