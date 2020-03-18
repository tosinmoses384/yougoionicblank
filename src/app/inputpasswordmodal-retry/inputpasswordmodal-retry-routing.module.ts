import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputpasswordmodalRetryPage } from './inputpasswordmodal-retry.page';

const routes: Routes = [
  {
    path: '',
    component: InputpasswordmodalRetryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputpasswordmodalRetryPageRoutingModule {}
