import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'hometab', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'car-info',
    loadChildren: () => import('./car-info/car-info.module').then( m => m.CarInfoPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'signup2',
    loadChildren: () => import('./signup2/signup2.module').then( m => m.Signup2PageModule)
  },
  {
    path: 'signup3',
    loadChildren: () => import('./signup3/signup3.module').then( m => m.Signup3PageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signupgrid1',
    loadChildren: () => import('./signupgrid1/signupgrid1.module').then( m => m.Signupgrid1PageModule)
  },
  {
    path: 'home1',
    loadChildren: () => import('./home1/home1.module').then( m => m.Home1PageModule)
  },
  {
    path: 'home2',
    loadChildren: () => import('./home2/home2.module').then( m => m.Home2PageModule)
  },
  {
    path: 'home3',
    loadChildren: () => import('./home3/home3.module').then( m => m.Home3PageModule)
  },
  {
    path: 'inbox',
    loadChildren: () => import('./inbox/inbox.module').then( m => m.InboxPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'submit',
    loadChildren: () => import('./submit/submit.module').then( m => m.SubmitPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'notification-detail',
    loadChildren: () => import('./notification-detail/notification-detail.module').then( m => m.NotificationDetailPageModule)
  },
  {
    path: 'delete-modal',
    loadChildren: () => import('./delete-modal/delete-modal.module').then( m => m.DeleteModalPageModule)
  },
  {
    path: 'myrides',
    loadChildren: () => import('./myrides/myrides.module').then( m => m.MyridesPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'endtrip',
    loadChildren: () => import('./endtrip/endtrip.module').then( m => m.EndtripPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'feedbackmodal',
    loadChildren: () => import('./feedbackmodal/feedbackmodal.module').then( m => m.FeedbackmodalPageModule)
  },
  {
    path: 'delete-notification',
    loadChildren: () => import('./delete-notification/delete-notification.module').then( m => m.DeleteNotificationPageModule)
  },
  {
    path: 'report-issue',
    loadChildren: () => import('./report-issue/report-issue.module').then( m => m.ReportIssuePageModule)
  },
  {
    path: 'inputpasswordmodal',
    loadChildren: () => import('./inputpasswordmodal/inputpasswordmodal.module').then( m => m.InputpasswordmodalPageModule)
  },
  {
    path: 'inputpasswordmodal-retry',
    loadChildren: () => import('./inputpasswordmodal-retry/inputpasswordmodal-retry.module').then( m => m.InputpasswordmodalRetryPageModule)
  },
  {
    path: 'tokeninput-confirm',
    loadChildren: () => import('./tokeninput-confirm/tokeninput-confirm.module').then( m => m.TokeninputConfirmPageModule)
  },
  {
    path: 'tokensuccess-modal',
    loadChildren: () => import('./tokensuccess-modal/tokensuccess-modal.module').then( m => m.TokensuccessModalPageModule)
  },
  {
    path: 'resetpassword-modal',
    loadChildren: () => import('./resetpassword-modal/resetpassword-modal.module').then( m => m.ResetpasswordModalPageModule)
  },
  {
    path: 'hometab',
    loadChildren: () => import('./hometab/hometab.module').then( m => m.HometabPageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
