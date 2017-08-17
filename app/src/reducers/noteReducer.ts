var cur: number = 1;
// function note(state = { cur: cur, default: '' }, action) {
function notes(state = [], action) {
    function find(arr:Array<any>,note:number):number{
        var idx= arr.findIndex((n)=>{
            return n.id==note;
        });
        return idx;
    }
    switch (action.type) {
        case 'newNote':
            var note = {
                id: cur,
                title: "Note " + cur++,
                text: '',
            }
            return [...state, note];
        case 'saveNote':
            var newState = [...state],
            index = find(newState,action.index);
            newState[index].text = action.text;
            return newState;
        case 'deleteNote':
            var newState = [...state];
            index = find(newState,action.index);
            newState.splice(index,1);
            return newState;
        default:
            return state;
    }
}

export default notes;