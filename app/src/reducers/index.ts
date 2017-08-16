import { combineReducers} from 'redux';
import search from './searchReducer';
import note from './noteReducer';

const Reducers = combineReducers({
    search : search,
    note : note
});

export default Reducers;