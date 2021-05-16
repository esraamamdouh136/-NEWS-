import { Component, Input, OnInit, Output } from '@angular/core';
import { NewsApiService } from 'src/app/core/Services/news-api.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {
  @Input() CardsList: any = {}
  constructor(
    private ServiceNewsApi: NewsApiService
  ) { }

  ngOnInit(): void {
  }
  getDescription(isMember) {
    return (isMember ? isMember : 'Sorry This news does not contain a description , You can read the full news by clicking on it and going to the details page');
  }
  DetailsNews(id: number, title: string, content: string, urlToImage: string) {
    let DetailsNewsObject = {
      id: id,
      title: title,
      content: content,
      urlToImage: urlToImage
    }
    this.ServiceNewsApi.getNewsDetails(DetailsNewsObject)
  }

}


