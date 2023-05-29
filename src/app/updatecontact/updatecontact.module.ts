import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatecontactPageRoutingModule } from './updatecontact-routing.module';

import { UpdatecontactPage } from './updatecontact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatecontactPageRoutingModule
  ],
  declarations: [UpdatecontactPage]
})
export class UpdatecontactPageModule {}
