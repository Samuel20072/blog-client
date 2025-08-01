import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { HttpClientModule } from '@angular/common/http';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-article-slider',
  standalone: true,
  imports: [CommonModule, SwiperModule, HttpClientModule],
  templateUrl: './article-slider.html',
})
export class ArticleSliderComponent {
  // Configuración del Swiper
  swiperConfig = {
    modules: [Autoplay, Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    navigation: true,
    loop: true
  };
}
