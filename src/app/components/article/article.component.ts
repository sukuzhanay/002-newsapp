import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../interfaces';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  // Inyecto articulos usando la interfaz, ver linea 2
  @Input() article: Article ;
  @Input() index: number;
  @Input() inFavorites: boolean;

  constructor() { }

  ngOnInit() {}

  isFavorite(article: Article) {
    return false;
  }
}
