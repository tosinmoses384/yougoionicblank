import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EndtripPage } from './endtrip.page';

const routes: Routes = [
  {
    path: '',
    component: EndtripPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EndtripPageRoutingModule {}
