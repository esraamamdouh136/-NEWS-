import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsNewsRoutingModule } from './details-news-routing.module';
import { DetailsNewsComponent } from './details-news.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { BreadcrumbsModule } from 'src/app/shared/breadcrumbs/breadcrumbs.module';
import { DetailsComponent } from './components/details/details.component';
import { RelatedTopicsComponent } from './components/related-topics/related-topics.component';


@NgModule({
  declarations: [DetailsNewsComponent, DetailsComponent, RelatedTopicsComponent],
  imports: [
    CommonModule,
    DetailsNewsRoutingModule,
    SharedModule,
    MaterialModule,
    BreadcrumbsModule
  ]
})
export class DetailsNewsModule { }
