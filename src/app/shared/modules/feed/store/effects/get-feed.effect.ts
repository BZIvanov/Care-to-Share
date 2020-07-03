import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { FeedService } from 'src/app/shared/modules/feed/services/feed.service';
import {
  getFeedAction,
  getFeedSuccessAction,
  getFeedFailureAction,
} from 'src/app/shared/modules/feed/store/actions/get-feed.action';
import { GetFeedResponseInterface } from 'src/app/shared/modules/feed/types/get-feed-response.interface';

@Injectable()
export class GetFeedEffect {
  getFeed$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getFeedAction),
      switchMap(({ url }) => {
        return this.feedService.getFeed(url).pipe(
          map((feed: GetFeedResponseInterface) => {
            return getFeedSuccessAction({ feed });
          }),

          catchError(() => {
            return of(getFeedFailureAction());
          })
        );
      })
    )
  );

  constructor(private actions$: Actions, private feedService: FeedService) {}
}
