import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MathPostPageRoutingModule } from './math-post-routing.module';

import { MathPostPage } from './math-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MathPostPageRoutingModule
  ],
  declarations: [MathPostPage]
})
export class MathPostPageModule {}
