// Import : Dependency
import {combineReducers} from 'redux';

// Import : Reducers
import Products from './reducers/Products';
import Categories from './reducers/Categories';
import Authentication from './reducers/Authentication';

const rootReducers = combineReducers({
  Products,
  Categories,
  Authentication,
});

export default rootReducers;
