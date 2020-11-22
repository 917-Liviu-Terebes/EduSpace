import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomeCardsPageRoutingModule } from './welcome-cards-routing.module';

import { WelcomeCardsPage } from './welcome-cards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomeCardsPageRoutingModule
  ],
  declarations: [WelcomeCardsPage]
})
export class WelcomeCardsPageModule {}
