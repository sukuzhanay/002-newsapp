import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
// Importo la interfaz
import { Article } from '../../interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
// Implemento la primera peticion OnInit
export class Tab2Page implements OnInit {

  // Creo una nueva propiedad, que sera un arreglo de strings
  public categories: string[] =['business','entertainment','general','health','science','sports','technology'];
  // Creo propiedad selectedCategory y Pongo el valor a 'general'
  public selectedCategory: string = this.categories[6];
  // Propiedad para mostrar los articulos
  public articles: Article[]=[];

  // inyecto servicio NewsService

  constructor(private newsService: NewsService ) {}
  // eslint-disable-next-line max-len
  // ngOnInit es un método del ciclo de vida de Angular que se llama después de que Angular inicializa las propiedades
  //  vinculadas a datos del componente. Es un buen lugar para inicializar la lógica del componente, como cargar datos
  //  desde un servicio.

  //subscribe(articles => { ... }) se suscribe al Observable devuelto por getTopHeadlinesByCategory. Cuando los datos
  // (en este caso, los artículos) están disponibles, se ejecuta la función de devolución de llamada
  // (articles => { ... }).

  //this.articles = [...this.articles, ...articles]; actualiza la propiedad articles del componente. Utiliza el
  //operador de propagación (...) para combinar los artículos existentes (this.articles) con los nuevos artículos
  // (articles) obtenidos del servicio
  ngOnInit(){
    this.newsService.getTopHeadlinesByCategory(this.selectedCategory)
    .subscribe(articles => {
      this.articles =[...this.articles,...articles];
    });
  }

  // Funcion que maneja el cambio de segmentos
  segmentChanged( event: any){
    this.selectedCategory = event.detail.value;
    this.newsService.getTopHeadlinesByCategory(this.selectedCategory)
    .subscribe(articles => {
      this.articles =[...articles];

    });
  }
}
