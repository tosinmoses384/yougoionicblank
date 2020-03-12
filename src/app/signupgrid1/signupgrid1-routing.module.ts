import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Signupgrid1Page } from './signupgrid1.page';

const routes: Routes = [
  {
    path: '',
    component: Signupgrid1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Signupgrid1PageRoutingModule {}
