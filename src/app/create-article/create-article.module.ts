import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CreateArticleComponent } from './components/create-article/create-article.component';
import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';
import { CreateArticleEffect } from './store/effects/create-article.effect';
import { reducers } from './store/reducers';
import { CreateArticleService } from 'src/app/create-article/services/create-article.service';

const routes: Routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent,
  },
];

@NgModule({
  declarations: [CreateArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('createArticle', reducers),
    EffectsModule.forFeature([CreateArticleEffect]),
    ArticleFormModule,
  ],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}
