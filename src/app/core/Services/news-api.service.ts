import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { NEWS } from '../models/NEWS.model';


@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  endpoint: string;
  URL: string = './assets/Json/newsapi.json';
  NewsDetails: NEWS[] = []
  constructor(
    public HTTP: HttpClient
  ) {

  }

  public getNewsApiFileData(): Observable<NEWS> {
    return this.HTTP.get<NEWS>(this.URL)
  }
  public getNewsDetails(NewsDetails) {
    this.NewsDetails.push(NewsDetails)
  }
}

