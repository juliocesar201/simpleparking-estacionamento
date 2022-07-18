import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TagPage } from './atualizarcadastropessoa.page';

const routes: Routes = [
  {
    path: '',
    component: TagPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagPageRoutingModule {}
