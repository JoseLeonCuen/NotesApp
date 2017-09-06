var storage = window.localStorage;
// var cur;

var initialState = (function () {
    var state = [];
    var index = 0;
    while(state.length<storage.length){
    // while (index < 20) {
        console.log(index);
        if (storage.getItem(index.toString()) != null) {
            state.push(
                {
                    id: index,
                    title: "Note " + index,
                    text: storage.getItem(index.toString())
                }
            );
        }
        index++;
    }
    return state;
})();
function notes(state = initialState, action) {
    var cur = state.length ? state[state.length - 1].id + 1 : 1;
    function find(arr: Array<any>, note: number): number {
        var idx = arr.findIndex((n) => {
            return n.id == note;
        });
        return idx;
    }
    switch (action.type) {
        case 'newNote':
            let id = action.id ? action.id : cur;
            var note = {
                id: id,
                title: "Note " + cur,
                text: action.text,
            }
            ////CREATE NEW ENTRY INTO LOCALSTORAGE
            storage.setItem(note.id.toString(), '');
            return [...state, note];
        case 'saveNote':
            var newState = [...state],
                index = find(newState, action.index);
            ////SAVE INTO LOCALSTORAGE
            storage.setItem(action.index.toString(), action.text);
            newState[index].text = action.text;
            return newState;
        case 'deleteNote':
            var newState = [...state];
            index = find(newState, action.index);
            ///REMOVE ENTRY FROM LOCALSTORAGE
            storage.removeItem(action.index);
            newState.splice(index, 1);
            return newState;
        default:
            return state;
    }
}

export default notes;