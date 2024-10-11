import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  // Inyecto articulos usando la interfaz, ver linea 2
  @Input() article: Article;
  @Input() index: number;
  @Input() inFavorites: boolean;

  constructor(
    private iab: InAppBrowser,
    private platform: Platform,
  ) {
  }

  ngOnInit() {
  }

  isFavorite(article: Article) {
    return false;
  }

  openArticle() {
    if (this.platform.is('ios') || this.platform.is('android')) {
      const browser = this.iab.create(this.article.url);
      browser.show();
      return;
      // abre navegador en la url del articulo en desktop
      window.open(this.article.url, '_blank');

    }
  }
}
