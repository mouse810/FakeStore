import { createStore } from 'redux';
import reducer from './Reducers/RootReducers';

const Store = createStore(reducer, {});

export default Store;
