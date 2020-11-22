import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MathPostPage } from './math-post.page';

const routes: Routes = [
  {
    path: '',
    component: MathPostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MathPostPageRoutingModule {}
