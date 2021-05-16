import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HelpComponent } from './components/help/help.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { SliderComponent } from './components/slider/slider.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [HomeComponent, HelpComponent, LatestNewsComponent, SliderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
