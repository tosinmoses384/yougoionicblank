import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedbackmodalPageRoutingModule } from './feedbackmodal-routing.module';

import { FeedbackmodalPage } from './feedbackmodal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedbackmodalPageRoutingModule
  ],
  declarations: [FeedbackmodalPage]
})
export class FeedbackmodalPageModule {}
