//Se utiliza para realizar solicitudes HTTP.
import { HttpClient } from '@angular/common/http';
//Marca la clase como un servicio para ser inyectado en otros componentes o servicios.
import { Injectable } from '@angular/core';
//Utilizado para manejar flujos de datos asíncronos.
import { Observable } from 'rxjs';
//Contiene variables de entorno, como la clave API de NewsAPI.
import { environment } from 'src/environments/environment';
//Interfaces que definen la estructura de los datos.
import { Article, NewsResp } from '../interfaces/index';
//Operador de transformación, utilizado para transformar la salida de un observable.
import { map } from 'rxjs/operators';

//Clave API de NewsAPI.
const apiKey = environment.apiKey;
@Injectable({
  providedIn: 'root'//Indica que el servicio es un singleton y está disponible en toda la app
})
export class NewsService {

  // Inyecta el servicio HttpClient para realizar solicitudes HTTP.
  constructor(private http: HttpClient) { }
  // Retorna un obxervable y lo pipeo parar transformar la salida

  //Realiza una solicitud GET a la API de noticias para obtener los titulares principales.
  getTopNews(): Observable<Article[]>{
    //Realiza la solicitud y espera una respuesta de tipo NewsResp.
    return this.http.get<NewsResp>(`https://newsapi.org/v2/top-headlines?country=us&category=general`,{
      params :{apiKey}}).pipe(map(( { articles } )=> articles));// Desestructuro los articulos
      //Usa el operador map para transformar la respuesta, extrayendo solo los artículos.
  }
  //Funcion Headlines por categoria, similar a getTopNews, pero permite especificar una categoría para filtrar los titulares.
  getTopHeadlinesByCategory(category: string): Observable<Article[]>{
    return this.http.get<NewsResp>(`https://newsapi.org/v2/top-headlines?country=us&category=${category}`,{
      params :{apiKey}
    }).pipe(map(( { articles } )=> articles));// Desestructuro los articulos
  }
}
