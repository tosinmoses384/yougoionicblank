import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TokeninputConfirmPage } from './tokeninput-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: TokeninputConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TokeninputConfirmPageRoutingModule {}
