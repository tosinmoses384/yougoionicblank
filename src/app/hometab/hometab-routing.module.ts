import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HometabPage } from './hometab.page';

const routes: Routes = [
  {
    path: 'hometab',
    component: HometabPage,
    children:
    [
      {
        path: 'home',
        children:
          [
            {
              path: '',
              loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
            }
          ]
      },
      {
        path: 'inbox',
        children:
          [
            {
              path: '',
              loadChildren: () => import('../inbox/inbox.module').then( m => m.InboxPageModule)
            }
          ]
      },
      {
        path: 'myrides',
        children:
          [
            {
              path: '',
              loadChildren: () => import('../myrides/myrides.module').then( m => m.MyridesPageModule)
            }
          ]
      },
      {
        path: 'payment',
        children:
          [
            {
              path: '',
              loadChildren: () => import('../payment/payment.module').then( m => m.PaymentPageModule)
            }
          ]
      },
      {
        path: 'profile',
        children:
          [
            {
              path: '',
              loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
            }
          ]
      },
      {
        path: 'logout',
        children:
          [
            {
              path: '',
              loadChildren: () => import('../logout/logout.module').then( m => m.LogoutPageModule)
            }
          ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HometabPageRoutingModule {}
