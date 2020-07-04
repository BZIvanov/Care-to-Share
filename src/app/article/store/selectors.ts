import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppStateInterface } from '../../shared/types/app-state.interface';
import { ArticleStateInterface } from '../types/article-state.interface';

export const articleFeatureSelector = createFeatureSelector<
  AppStateInterface,
  ArticleStateInterface
>('article');

export const isLoadingSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.isLoading
);

export const errorSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.error
);

export const articleSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.data
);
