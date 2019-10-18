// Import : Dependency
import {AsyncStorage} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import {persistStore, persistReducer} from 'redux-persist';

// Import : Redux
import rootReducers from './index';

// Configuration Redux-Persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['Products', 'Categories'],
};

const logger = createLogger();
// Middleware : Redux-Persist Persisted The Reducers
const persistedReducer = persistReducer(persistConfig, rootReducers);

// Redux : Store
const store = createStore(persistedReducer, applyMiddleware(promiseMiddleware));

// Middleware : Redux-Persist Persister
let persistor = persistStore(store);

export {store, persistor};
