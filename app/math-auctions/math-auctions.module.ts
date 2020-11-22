import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MathAuctionsPageRoutingModule } from './math-auctions-routing.module';

import { MathAuctionsPage } from './math-auctions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MathAuctionsPageRoutingModule
  ],
  declarations: [MathAuctionsPage]
})
export class MathAuctionsPageModule {}
