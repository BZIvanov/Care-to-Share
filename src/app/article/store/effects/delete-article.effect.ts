import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { ArticleService } from '../../services/article.service';
import {
  deleteArticleAction,
  deleteArticleSuccessAction,
  deleteArticleFailureAction,
} from '../actions/delete-article.action';
import { Router } from '@angular/router';

@Injectable()
export class DeleteArticleEffect {
  deleteArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteArticleAction),
      switchMap(({ slug }) => {
        return this.articleService.deleteArticle(slug).pipe(
          map(() => {
            return deleteArticleSuccessAction();
          }),

          catchError(() => {
            return of(deleteArticleFailureAction());
          })
        );
      })
    )
  );

  redirectAfterDelete$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteArticleSuccessAction),
        tap(() => {
          this.router.navigate(['/']);
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private articleService: ArticleService,
    private router: Router
  ) {}
}
