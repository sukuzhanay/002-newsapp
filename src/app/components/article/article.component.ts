import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../interfaces/index';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  // Inyecto articulos usando la interfaz, ver linea 2
  @Input() article:Article ;
  @Input() index: number;

  constructor() { }

  ngOnInit() {}

}
