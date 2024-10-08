// Decorador que marca una clase como un componente y OnInit: Interfaz que define el método ngOnInit para inicializar el componente
import { Component, OnInit } from '@angular/core';
// NewsService: Servicio que se utiliza para obtener noticias.
import { NewsService } from '../../services/news.service';
// NewsResp, Article: Interfaces que definen la estructura de los datos de noticias.
import { Article } from '../../interfaces';
@Component({
  //Nombre del selector del componente, utilizado en el HTML para insertar este componente.
  selector: 'app-tab1',
  // Ruta al archivo de plantilla HTML del componente.
  templateUrl: 'tab1.page.html',
  // Ruta al archivo de estilos CSS del componente.
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  // articles: Article[] = []: Propiedad pública que almacena un array de artículos.
  public articles: Article[]=[];
  //Inyecta el servicio NewsService en el componente.
  constructor(private newsService: NewsService) {}
  //ngOnInit(): Método del componente que se ejecuta una vez que Angular ha inicializado todas las propiedades del comp.
  //this.newsService.getTopNews(): Llama al getTopNews() del servicio NewsService para obtener las noticias principales.
  //subscribe(articles => this.articles.push(…articles)): Se suscribe al observable devuelto por getTopNews y añade los
  // artículos obtenidos al array articles del componente.
  ngOnInit(){
    this.newsService.getTopNews().subscribe( articles  => this.articles.push(...articles));
     }
  }

