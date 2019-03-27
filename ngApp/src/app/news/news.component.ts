import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  posts$: Object;

  constructor(private news: NewsService) { }

  ngOnInit() {
    this.news.getNews().subscribe(
      news => {this.posts$ = news;
        this.posts$ = Array.of(this.posts$);
      },
      err => console.error(err), 
      () => console.log('get news completed', this.posts$) 
      );
  }

}
