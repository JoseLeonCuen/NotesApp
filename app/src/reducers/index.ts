import { combineReducers} from 'redux';
import search from './searchReducer';
import notes from './noteReducer';

const Reducers = combineReducers({
    search : search,
    noteArray : notes
});

export default Reducers;