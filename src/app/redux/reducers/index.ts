import {
  // ActionReducer,
  ActionReducerMap,
  // createFeatureSelector,
  // createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { IVideoState, VIDEOSTATE_KEY } from '../state.models';
import { videoReducer } from './videos.reducers';

export interface State {
  [VIDEOSTATE_KEY]: IVideoState,
}

export const reducers: ActionReducerMap<State> = {
  [VIDEOSTATE_KEY]: videoReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
