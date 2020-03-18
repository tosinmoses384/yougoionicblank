import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedbackmodalPage } from './feedbackmodal.page';

const routes: Routes = [
  {
    path: '',
    component: FeedbackmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedbackmodalPageRoutingModule {}
