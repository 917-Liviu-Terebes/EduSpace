import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Post8commentPageRoutingModule } from './post8comment-routing.module';

import { Post8commentPage } from './post8comment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Post8commentPageRoutingModule
  ],
  declarations: [Post8commentPage]
})
export class Post8commentPageModule {}
