function newNote() {
    return {
        type: 'newNote'
    }
}
function editNote(index) {
    return {
        type: 'editNote',
        index: index
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
    edit: editNote,
    save: saveNote,
    delete: deleteNote
}
export default noteActions;