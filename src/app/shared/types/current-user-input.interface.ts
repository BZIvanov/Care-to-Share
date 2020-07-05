import { CurrentUserInterface } from 'src/app/shared/types/current-user.interface';

export interface CurrentUserInputInterface extends CurrentUserInterface {
  password: string;
}
