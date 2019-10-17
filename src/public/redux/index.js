// Import : Dependency
import {combineReducers} from 'redux';

// Import : Reducers
import Products from './reducers/Products';
import Categories from './reducers/Categories';

const rootReducers = combineReducers({
  Products,
  Categories,
});

export default rootReducers;
