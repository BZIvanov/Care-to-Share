import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppStateInterface } from '../../shared/types/app-state.interface';
import { SettingsStateInterface } from '../types/settings-state.interface';

export const settingsFeatureSelector = createFeatureSelector<
  AppStateInterface,
  SettingsStateInterface
>('settings');

export const isSubmittingSelector = createSelector(
  settingsFeatureSelector,
  (settingsState: SettingsStateInterface) => settingsState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  settingsFeatureSelector,
  (settingsState: SettingsStateInterface) => settingsState.validationErrors
);
