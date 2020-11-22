import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Auction3PageRoutingModule } from './auction3-routing.module';

import { Auction3Page } from './auction3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Auction3PageRoutingModule
  ],
  declarations: [Auction3Page]
})
export class Auction3PageModule {}
