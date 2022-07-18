import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriartagPage } from './criartag.page';

const routes: Routes = [
  {
    path: '',
    component: CriartagPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriartagPageRoutingModule {}
