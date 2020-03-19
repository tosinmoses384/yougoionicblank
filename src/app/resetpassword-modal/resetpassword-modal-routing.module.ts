import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetpasswordModalPage } from './resetpassword-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ResetpasswordModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetpasswordModalPageRoutingModule {}
