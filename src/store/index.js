import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from '../reducers';

// On déclare le moteur de stockage utilisé par redux-persist
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}
const persistedReducer = persistReducer(persistConfig, reducers)

// composeWithDevTools() permet le debuggage dans React Native Debugger
// 
export const store = createStore(persistedReducer, __DEV__ ? composeWithDevTools() : undefined);
export const persistor = persistStore(store)