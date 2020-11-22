import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeCardsPage } from './welcome-cards.page';

const routes: Routes = [
  {
    path: '',
    component: WelcomeCardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeCardsPageRoutingModule {}
