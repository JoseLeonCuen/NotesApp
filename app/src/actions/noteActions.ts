function newNote() {
    return {
        type: 'newNote',        
    }
}
function saveNote(index: number, text: string) {
    return {
        type: 'saveNote',
        index,
        text
    }
}
function deleteNote(index) {
    return {
        type: 'deleteNote',
        index
    }
}
function moveNote(index){
    return{
        type:'moveNote',
        index
    }
}
function undoNote(state){
    return{
        type:'undoNote',
        state
    }
}
const noteActions = {
    new: newNote,
    save: saveNote,
    delete: deleteNote,
    move : moveNote,
    undo : undoNote
}
export default noteActions;