import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TokensuccessModalPage } from './tokensuccess-modal.page';

const routes: Routes = [
  {
    path: '',
    component: TokensuccessModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TokensuccessModalPageRoutingModule {}
