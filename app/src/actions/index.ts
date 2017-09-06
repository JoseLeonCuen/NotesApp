import Search from './searchActions';
import Notes from './noteActions';
import History from './historyActions';

const Actions = {
    search : Search,
    newNote : Notes.new,
    saveNote : Notes.save,
    deleteNote : Notes.delete,
    moveNote : Notes.move,
    do : History.do,
    undo : History.undo
}
export default Actions;
