import { Component, OnInit } from '@angular/core';
import { NEWS } from 'src/app/core/models/NEWS.model';
import { NewsApiService } from 'src/app/core/Services/news-api.service';

@Component({
  selector: 'app-details-news',
  templateUrl: './details-news.component.html',
  styleUrls: ['./details-news.component.scss']
})
export class DetailsNewsComponent implements OnInit {
  NewsDetails: any;
  News: string = 'News Details'
  relateTopics: any;
  constructor(
    private Service: NewsApiService
  ) {
    this.NewsDetails = this.Service.NewsDetails;
  }
  ngOnInit(): void {
    this.Service.getNewsApiFileData().subscribe(res => this.relateTopics = res)
    console.log(this.relateTopics)
  }

}
