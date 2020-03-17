import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyridesPage } from './myrides.page';

const routes: Routes = [
  {
    path: '',
    component: MyridesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyridesPageRoutingModule {}
