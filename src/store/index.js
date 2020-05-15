import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducers from '../reducers';

// On déclare le moteur de stockage utilisé par redux-persist
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
const simpleLogger = store => next => action => {
  console.log(action);
  next(action);
};
const extendedLogger = store => next => action => {
  console.log('previous state', store.getState());
  const result = next(action);
  console.log('next state', store.getState());
  return;
};
const incrementLogger = store => next => action => {
  if (action.type === 'INCREMENT') {
    console.log(action);
  }
  next(action);
};

// composeWithDevTools() permet le debuggage dans React Native Debugger
//
export const store = createStore(
  persistedReducer,
  __DEV__ ? composeWithDevTools() : undefined,
  applyMiddleware(simpleLogger, extendedLogger, incrementLogger),
);
export const persistor = persistStore(store);
