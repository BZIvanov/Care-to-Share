import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backend-errors.interface';

export interface AuthStateInterface {
  isSubmitting: boolean;
  isLoading: boolean;
  currentUser: CurrentUserInterface | null;
  isLoggedIn: boolean | null;
  validationErrors: BackendErrorsInterface | null;
}
