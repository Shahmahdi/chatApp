import { createStore, applyMiddleware, compose } from 'redux';
import { ChatReducer } from "./chat/Reducer";
import thunk from 'redux-thunk';

const IntialState = {} as any;

const middleware = [thunk];

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = createStore(
  ChatReducer,
  IntialState,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
);