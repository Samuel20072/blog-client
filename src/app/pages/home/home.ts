import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header';
import { FooterComponent } from '../../components/footer/footer';
import { ArticleSliderComponent } from '../../components/articles/article-slider/article-slider';
import { ArticleCard } from '../../components/articles/article-card/article-card';

@Component({
  selector: 'app-home',
  imports: [ HeaderComponent, FooterComponent, ArticleSliderComponent, ArticleCard],
  templateUrl: './home.html',
})
export class HomeComponent {

}
