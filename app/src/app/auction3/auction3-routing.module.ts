import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Auction3Page } from './auction3.page';

const routes: Routes = [
  {
    path: '',
    component: Auction3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Auction3PageRoutingModule {}
