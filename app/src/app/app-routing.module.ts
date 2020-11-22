import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'math-post',
    loadChildren: () => import('./math-post/math-post.module').then( m => m.MathPostPageModule)
  },
  {
    path: 'math-auctions',
    loadChildren: () => import('./math-auctions/math-auctions.module').then( m => m.MathAuctionsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'welcome-cards',
    loadChildren: () => import('./welcome-cards/welcome-cards.module').then( m => m.WelcomeCardsPageModule)
  },
  {
    path: 'auction3',
    loadChildren: () => import('./auction3/auction3.module').then( m => m.Auction3PageModule)
  },
  {
    path: 'post3',
    loadChildren: () => import('./post3/post3.module').then( m => m.Post3PageModule)
  },
  {
    path: 'post8comment',
    loadChildren: () => import('./post8comment/post8comment.module').then( m => m.Post8commentPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
