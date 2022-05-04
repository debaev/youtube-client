/* eslint-disable ngrx/on-function-explicit-return-type */
import { createReducer, on } from '@ngrx/store';
import { searchVideos, addCard } from '../actions/videos.actions';
import { initialVideoState } from '../state.models';

export const videoReducer = createReducer(
  initialVideoState,
  on(searchVideos, (state, response) => ({
    ...state,
    youtubeResponse: response.loadedVideo,
  })),
  on(addCard, (state, newCard) => ({
    ...state,
    customCard: [...state.customCard!, newCard],
  })),
);
