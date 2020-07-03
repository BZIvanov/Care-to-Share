import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../action-types';
import { PopularTagType } from '../../../../types/popular-tag.type';

export const getPopularTagsAction = createAction(ActionTypes.GET_POPULAR_TAGS);

export const getPopularTagsSuccessAction = createAction(
  ActionTypes.GET_POPULAR_TAGS_SUCCESS,
  props<{ popularTags: PopularTagType[] }>()
);

export const getPopularTagsFailure = createAction(
  ActionTypes.GET_POPULAR_TAGS_FAILURE
);
