import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriartagPageRoutingModule } from './criartag-routing.module';

import { CriartagPage } from './criartag.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriartagPageRoutingModule
  ],
  declarations: [CriartagPage]
})
export class CriartagPageModule {}
