import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ArticleFormModule } from '../shared/modules/article-form/article-form.module';
import { reducers } from './store/reducers';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { UpdateArticleEffect } from './store/effects/update-article.effect';
import { GetArticleEffect } from './store/effects/get-article.effect';
import { EditArticleService } from './services/edit-article.service';
import { ArticleService as SharedArticleService } from '../shared/services/article.service';
import { LoadingModule } from '../shared/modules/loading/loading.module';

const routes: Routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent,
  },
];

@NgModule({
  declarations: [EditArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('editArticle', reducers),
    EffectsModule.forFeature([UpdateArticleEffect, GetArticleEffect]),
    ArticleFormModule,
    LoadingModule,
  ],
  providers: [EditArticleService, SharedArticleService],
})
export class EditArticleModule {}
