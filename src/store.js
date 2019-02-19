import { createStore } from 'redux';
import reducer from './render/reducers';

const store = createStore(reducer);

export default store;
