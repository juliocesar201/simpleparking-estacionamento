import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeiculosPageRoutingModule } from './veiculos-routing.module';

import { VeiculosPage } from './veiculos.page';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,BrMaskerModule ,
    FormsModule,
    IonicModule,
    VeiculosPageRoutingModule
  ],
  declarations: [VeiculosPage]
})
export class VeiculosPageModule {}
