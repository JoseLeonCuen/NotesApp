import Search from './searchActions';
import Notes from './noteActions';

const Actions = {
    search : Search,
    newNote : Notes.new,
    editNote : Notes.edit,
    saveNote : Notes.save,
    deleteNote : Notes.delete
}
export default Actions;
