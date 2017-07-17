import { createStore} from 'redux'; // , combineReducers, applyMiddleware
import expander from './reducers';


export default createStore(expander);
