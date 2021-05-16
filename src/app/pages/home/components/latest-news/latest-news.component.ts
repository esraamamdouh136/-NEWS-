import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/internal/operators/take';
import { map } from 'rxjs/operators';
import { NEWS } from 'src/app/core/models/NEWS.model';
import { NewsApiService } from 'src/app/core/Services/news-api.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {
  NewsApiData: NEWS[] = [];
  constructor
    (
      public NewsApiServices: NewsApiService
    ) { }

  ngOnInit(): void {
    this.NewsApiServices.getNewsApiFileData().pipe(map(data => data['articles']))
      .subscribe(res => {
        this.NewsApiData = res.filter(t => t.showOnHomepage == true)
          .sort((a, b) => {
            return b.publishedAt == a.publishedAt ? 0
              : b.publishedAt > a.publishedAt ? 1 : -1
          })
      })
  }

}
