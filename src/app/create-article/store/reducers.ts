import { createReducer, on, Action } from '@ngrx/store';

import { CreateArticleStateInterface } from '../types/create-article-state.interface';
import {
  createArticleAction,
  createArticleSuccessAction,
  createArticleFailureAction,
} from './actions/create-article.action';

const initialState: CreateArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null,
};

const createArticleReducer = createReducer(
  initialState,
  on(
    createArticleAction,
    (state): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    createArticleSuccessAction,
    (state): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    createArticleFailureAction,
    (state, action): CreateArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
);

export function reducers(state: CreateArticleStateInterface, action: Action) {
  return createArticleReducer(state, action);
}
