import { UserProfileInterface } from './user-profile.interface';

export interface UserProfileStateInterface {
  data: UserProfileInterface | null;
  isLoading: boolean;
  error: string | null;
}
