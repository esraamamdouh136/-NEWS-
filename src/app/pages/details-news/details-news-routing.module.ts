import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsNewsComponent } from './details-news.component';

const routes: Routes = [{ path: '', component: DetailsNewsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsNewsRoutingModule { }
