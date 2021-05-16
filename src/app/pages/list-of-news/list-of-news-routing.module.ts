import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListOfNewsComponent } from './list-of-news.component';

const routes: Routes = [
  { path: '', component: ListOfNewsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListOfNewsRoutingModule { }
