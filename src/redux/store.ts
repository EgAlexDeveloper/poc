import { Action, applyMiddleware, combineReducers, createStore, Dispatch, Middleware, Store } from 'redux';
import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';

import posts from './postsReducer';
import { ActionTypes, PostsReducerStateType } from './types';

import { composeWithDevTools } from "redux-devtools-extension";

export type AppActionTypes =
    | ActionTypes

export interface AppState {
    posts: PostsReducerStateType;
};

export interface AppAction extends Action<AppActionTypes> { };

const middlewareList: Middleware[] = [];
const enhancers = [applyMiddleware(...middlewareList)];
const initialState = {};

export const store: Store = createStore(
    combineReducers<any>({
        posts
    }),
    initialState,
    composeWithDevTools(...enhancers)
);

export const useDispatch = (): Dispatch<AppAction> => useReduxDispatch();
export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector;