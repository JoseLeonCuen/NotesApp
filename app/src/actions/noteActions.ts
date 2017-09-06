function newNote(text:string,id?:number) {
    // console.log("text: ",text);
    // console.log("id: ",id);
    return {
        type: 'newNote',
        id:id,
        text:text
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
function moveNote(index){
    return{
        type:'moveNote',
        index:index
    }
}
const noteActions = {
    new: newNote,
    save: saveNote,
    delete: deleteNote,
    move : moveNote
}
export default noteActions;