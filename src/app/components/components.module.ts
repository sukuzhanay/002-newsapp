import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
@NgModule({
  declarations: [
    ArticleComponent, ArticlesComponent // creados para reutilizar
  ],
  imports: [
    CommonModule,
    IonicModule, // obligatorio para poder usar ion-component
  ],
  exports:[
    ArticlesComponent,
  ]
})
export class ComponentsModule { }
