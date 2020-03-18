import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputpasswordmodalPage } from './inputpasswordmodal.page';

const routes: Routes = [
  {
    path: '',
    component: InputpasswordmodalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputpasswordmodalPageRoutingModule {}
