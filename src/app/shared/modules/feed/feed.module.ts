import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { FeedComponent } from './components/feed/feed.component';
import { FeedService } from 'src/app/shared/modules/feed/services/feed.service';
import { GetFeedEffect } from 'src/app/shared/modules/feed/store/effects/get-feed.effect';
import { reducers } from 'src/app/shared/modules/feed/store/reducers';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
  ],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
