import { createAction } from '@ngrx/store';
import { ActionTypes } from '../action-types';

export const logoutAction = createAction(ActionTypes.LOGOUT);
