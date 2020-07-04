import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { reducers } from './store/reducers';
import { ArticleComponent } from './components/article/article.component';
import { LoadingModule } from '../shared/modules/loading/loading.module';
import { ErrorMessageModule } from '../shared/modules/error-message/error-message.module';
import { TagListModule } from '../shared/modules/tag-list/tag-list.module';
import { GetArticleEffect } from './store/effects/get-article.effect';
import { ArticleService } from '../shared/services/article.service';

const routes: Routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
];

@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('article', reducers),
    EffectsModule.forFeature([GetArticleEffect]),
    LoadingModule,
    ErrorMessageModule,
    TagListModule,
  ],
  providers: [ArticleService],
})
export class ArticleModule {}
