import { combineReducers} from 'redux';
import search from './searchReducer';


const Reducers = combineReducers({
    search : search
});

export default Reducers;