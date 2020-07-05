import { createReducer, on, Action } from '@ngrx/store';

import { SettingsStateInterface } from '../types/settings-state.interface';
import {
  updateCurrentUserAction,
  updateCurrentUserSuccessAction,
  updateCurrentUserFailureAction,
} from '../../auth/store/actions/update-current-user.action';

const initialState: SettingsStateInterface = {
  isSubmitting: false,
  validationErrors: null,
};

const settingsReducers = createReducer(
  initialState,
  on(
    updateCurrentUserAction,
    (state): SettingsStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    updateCurrentUserSuccessAction,
    (state): SettingsStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    updateCurrentUserFailureAction,
    (state, action): SettingsStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
);

export function reducers(state: SettingsStateInterface, action: Action) {
  return settingsReducers(state, action);
}
