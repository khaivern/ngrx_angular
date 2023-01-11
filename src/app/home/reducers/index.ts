import { isDevMode } from '@angular/core';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

export const homeFeatureKey = 'home';

export interface HomeState {}

export const reducers: ActionReducerMap<HomeState> = {};

export const metaReducers: MetaReducer<HomeState>[] = isDevMode() ? [] : [];
