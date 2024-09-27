import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
// Import interfaces
import { Article, NewsResp } from '../interfaces/index';
import { map } from "rxjs/operators";
const apiKey = environment.apiKey;
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }
  // Retorna un obxervable y lo pipeo parar transformar la salida
  getTopNews():Observable<Article[]>{

    return this.http.get<NewsResp>(`https://newsapi.org/v2/top-headlines?country=us&category=business`,{
      params :{apiKey}
    }).pipe(map(( { articles } )=> articles));// Desestructuro los articulos
  }
  //Funcion Headlines por categoria
  getTopHeadlinesByCategory(category:string):Observable<Article[]>{
    return this.http.get<NewsResp>(`https://newsapi.org/v2/top-headlines?country=us&category=${category}`,{
      params :{apiKey}
    }).pipe(map(( { articles } )=> articles));// Desestructuro los articulos
  }
}
 