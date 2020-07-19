import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserLinkComponent } from './components/user-link/user-link.component';

@NgModule({
  declarations: [UserLinkComponent],
  imports: [CommonModule, RouterModule],
  exports: [UserLinkComponent],
})
export class UserLinkModule {}
