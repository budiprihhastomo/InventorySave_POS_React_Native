// Import : Dependency
import {combineReducers} from 'redux';

// Import : Reducers
import {getProducts, manageProducts} from './reducers/Products';
import Categories from './reducers/Categories';
import Authentication from './reducers/Authentication';

const rootReducers = combineReducers({
  getProducts,
  manageProducts,
  Categories,
  Authentication,
});

export default rootReducers;
