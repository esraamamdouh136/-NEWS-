import { Component, ElementRef, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Category } from 'src/app/core/models/Category.model';
import { NEWS } from 'src/app/core/models/NEWS.model';
import { NewsApiService } from 'src/app/core/Services/news-api.service';

@Component({
  selector: 'app-list-of-news',
  templateUrl: './list-of-news.component.html',
  styleUrls: ['./list-of-news.component.scss']
})
export class ListOfNewsComponent implements OnInit {
  Category = new FormControl();
  sourceCategory: Category[] = [];
  NewsApiData: NEWS[] = [];
  DataFilter: NEWS[] = [];
  News: string = 'News'
  searchText: string;

  constructor
    (
      public NewsApiServices: NewsApiService,
      public elRef: ElementRef
    ) { }


  ngOnInit(): void {
    this.NewsApiServices.getNewsApiFileData().pipe(map(data => data['sourceCategory']))
      .subscribe(res => {
        this.sourceCategory = res
      })

    this.NewsApiServices.getNewsApiFileData().pipe(map(data => data['articles']))
      .subscribe(res => {
        this.NewsApiData = res
          .sort((a, b) => {
            return b.publishedAt == a.publishedAt ? 0
              : b.publishedAt > a.publishedAt ? 1 : -1
          })
      })
  }

  Filter(value) {
    this.elRef.nativeElement.querySelector('.FirstLoad').classList.add('d-none')
    this.elRef.nativeElement.querySelector('.AfterFilter').classList.remove('d-none')
    this.DataFilter = this.NewsApiData.filter(t => {
      return t.sourceID == value
    })
  }
  search() {
    this.Filter = this.search
    console.log(this.Filter)
  }
}
