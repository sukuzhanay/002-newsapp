import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../interfaces';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  // Traigo los artículos como argumento de la clase ArticlesComponent con @Input
  @Input() articles: Article[]=[];
  constructor() { }
  ngOnInit() {}
}
