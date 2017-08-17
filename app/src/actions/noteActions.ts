function newNote() {
    return {
        type: 'newNote'
    }
}
function saveNote(index: number, text: string) {
    return {
        type: 'saveNote',
        index: index,
        text: text
    }
}
function deleteNote(index) {
    return {
        type: 'deleteNote',
        index: index
    }
}
const noteActions = {
    new: newNote,
    save: saveNote,
    delete: deleteNote
}
export default noteActions;