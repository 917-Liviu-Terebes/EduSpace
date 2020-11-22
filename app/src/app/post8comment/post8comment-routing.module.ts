import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Post8commentPage } from './post8comment.page';

const routes: Routes = [
  {
    path: '',
    component: Post8commentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Post8commentPageRoutingModule {}
