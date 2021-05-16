import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListOfNewsRoutingModule } from './list-of-news-routing.module';
import { ListOfNewsComponent } from './list-of-news.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListComponent } from './components/list/list.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { BreadcrumbsModule } from 'src/app/shared/breadcrumbs/breadcrumbs.module';
import { DatePickerComponent } from './components/date-picker/date-picker.component';


@NgModule({
  declarations: [ListOfNewsComponent, ListComponent, DatePickerComponent],
  imports: [
    CommonModule,
    ListOfNewsRoutingModule,
    SharedModule,
    MaterialModule,
    BreadcrumbsModule
  ]
})
export class ListOfNewsModule { }
