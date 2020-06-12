import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';
import thunk from 'redux-thunk';

// On déclare le moteur de stockage utilisé par redux-persist
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}

const simpleLogger = store => next => action => {
    console.log(action);
    next(action);
}
const extendedLogger = store => next => action => {
    console.log('previous state', store.getState())
    const result = next(action)
    console.log('next state', store.getState())
    return result
}

// On liste ici les middleware dont on a besoin
//
const middlewares = [thunk, simpleLogger, extendedLogger]

// composeWithDevTools() permet le debuggage dans React Native Debugger
// 
const enhancers = [composeWithDevTools({})(applyMiddleware(...middlewares))]

const persistedReducer = persistReducer(persistConfig, reducers)
export const store = createStore(persistedReducer, compose(...enhancers));
export const persistor = persistStore(store)