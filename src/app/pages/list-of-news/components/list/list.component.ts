import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { NEWS } from 'src/app/core/models/NEWS.model';
import { NewsApiService } from 'src/app/core/Services/news-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() NewsApiData: NEWS[] = [];
  @Input() DataFilter: NEWS[] = [];
  @Input() searchText: string;
  p = 1;
  constructor
    (
      public NewsApiServices: NewsApiService
    ) { }

  ngOnInit(): void {
  }

}
