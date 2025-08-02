import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-article-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-slider.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ArticleSliderComponent implements OnInit {
  articles: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    register(); // registrar Swiper una sola vez
    this.fetchArticles();
  }

  fetchArticles() {
    this.http.get<any>('http://localhost:3000/api/articles').subscribe({
      next: (response) => {
        // Asegúrate que response sea un array, o ajusta si viene con estructura tipo { data: [...] }
        this.articles = Array.isArray(response) ? response : response.data;
      },
      error: (err) => console.error('Error fetching articles', err),
    });
  }
}
