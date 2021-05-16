import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CardsListComponent } from './cards-list/cards-list.component';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxTablePaginationModule } from "ngx-table-pagination";
import { TitleComponent } from './title/title.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SearchPipe } from '../core/search.pipe';


@NgModule({
  declarations: [
    SidenavListComponent,
    HeaderComponent,
    FooterComponent,
    CardsListComponent,
    BottomBarComponent,
    TitleComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxTablePaginationModule,
    CarouselModule
  ],
  exports: [
    SidenavListComponent,
    HeaderComponent,
    FooterComponent,
    MaterialModule,
    HttpClientModule,
    CardsListComponent,
    RouterModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    BottomBarComponent,
    NgbModule,
    NgxTablePaginationModule,
    TitleComponent,
    CarouselModule,
    SearchPipe

  ]
})
export class SharedModule { }
