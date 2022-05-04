import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IVideoState, VIDEOSTATE_KEY } from '../state.models';

// eslint-disable-next-line ngrx/prefix-selectors-with-select
export const featureSelector = createFeatureSelector<IVideoState>(VIDEOSTATE_KEY);

// eslint-disable-next-line ngrx/prefix-selectors-with-select
export const youtubeVideoSelector = createSelector(
  featureSelector,
  (state) => state.youtubeResponse,
);
