import { combineReducers } from 'redux';
import { productReducer } from './ProductReducers';

const Reducers = combineReducers({
  allProducts: productReducer,
});

export default Reducers;
