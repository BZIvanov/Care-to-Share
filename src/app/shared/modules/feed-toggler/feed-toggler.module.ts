import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FeedTogglerComponent } from './components/feed-toggler/feed-toggler.component';

@NgModule({
  declarations: [FeedTogglerComponent],
  imports: [CommonModule, RouterModule],
  exports: [FeedTogglerComponent],
})
export class FeedTogglerModule {}
