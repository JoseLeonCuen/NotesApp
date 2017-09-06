import { combineReducers} from 'redux';
import search from './searchReducer';
import notes from './noteReducer';
import history from './historyReducer';

const Reducers = combineReducers({
    search : search,
    noteArray : notes,
    history : history
});

export default Reducers;