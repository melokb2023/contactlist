import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatecontactPage } from './updatecontact.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatecontactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatecontactPageRoutingModule {}
