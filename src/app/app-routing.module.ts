import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =
  [
    {
      path: '',
      loadChildren: () => import
        ('./pages/home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'listOfNews',
      loadChildren: () => import
        ('./pages/list-of-news/list-of-news.module').then(m => m.ListOfNewsModule)
    },
    {
      path: 'details-news/:id',
      loadChildren: () => import
        ('./pages/details-news/details-news.module').then(m => m.DetailsNewsModule)
    }
  ]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
