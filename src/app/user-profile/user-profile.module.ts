import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { reducers } from './store/reducers';
import { GetUserProfileEffect } from './store/effects/get-user-profile.effect';
import { UserProfileService } from './services/user-profile.service';
import { FeedModule } from '../shared/modules/feed/feed.module';

const routes: Routes = [
  {
    path: 'profiles/:slug',
    component: UserProfileComponent,
  },
  {
    path: 'profiles/:slug/favorites',
    component: UserProfileComponent,
  },
];

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetUserProfileEffect]),
    StoreModule.forFeature('userProfile', reducers),
    FeedModule,
  ],
  providers: [UserProfileService],
})
export class UserProfileModule {}
