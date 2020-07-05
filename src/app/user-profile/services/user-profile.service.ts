import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { UserProfileInterface } from '../types/user-profile.interface';
import { GetUserProfileResponseInterface } from '../types/get-user-profile-response.interface';

@Injectable()
export class UserProfileService {
  constructor(private http: HttpClient) {}

  getUserProfile(slug: string): Observable<UserProfileInterface> {
    const url = `${environment.apiUrl}/profiles/${slug}`;

    return this.http
      .get(url)
      .pipe(
        map((response: GetUserProfileResponseInterface) => response.profile)
      );
  }
}
