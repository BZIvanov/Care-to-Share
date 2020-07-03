import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';

import { reducers } from './store/reducers';
import { GetPopularTagsEffect } from './store/effects/get-popular-tags.effect';
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';
import { LoadingModule } from '../loading/loading.module';
import { ErrorMessageModule } from '../error-message/error-message.module';
import { PopularTagsService } from './services/popular-tags.service';

@NgModule({
  declarations: [PopularTagsComponent],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    LoadingModule,
    ErrorMessageModule,
  ],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
