import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MathAuctionsPage } from './math-auctions.page';

const routes: Routes = [
  {
    path: '',
    component: MathAuctionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MathAuctionsPageRoutingModule {}
