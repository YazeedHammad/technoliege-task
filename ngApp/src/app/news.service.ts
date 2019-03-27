import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=2a3de74cce11496bbf8fd7869318ad25')
  }
}
