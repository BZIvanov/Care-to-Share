import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { PopularTagsService } from '../../services/popular-tags.service';
import {
  getPopularTagsAction,
  getPopularTagsSuccessAction,
  getPopularTagsFailure,
} from '../actions/get-popular-tags.action';
import { PopularTagType } from '../../../../types/popular-tag.type';

@Injectable()
export class GetPopularTagsEffect {
  getPopularTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPopularTagsAction),
      switchMap(() => {
        return this.popularTagsService.getPopularTags().pipe(
          map((popularTags: PopularTagType[]) => {
            return getPopularTagsSuccessAction({ popularTags });
          }),

          catchError(() => {
            return of(getPopularTagsFailure());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService
  ) {}
}
