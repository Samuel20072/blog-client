import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-card.html',
})
export class ArticleCard implements OnInit {
  articles: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchArticles();
  }

  fetchArticles() {
    this.http.get<any>('http://localhost:3000/api/articles').subscribe({
      next: (response) => {
        this.articles = Array.isArray(response) ? response : response.data;
      },
      error: (err) => console.error('Error fetching articles', err),
    });
  }
}
