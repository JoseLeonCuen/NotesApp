var storage = window.localStorage;
// var cur;

var initialState = (function () {
    var stored = JSON.parse(storage.getItem('1'));
    return stored;
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
            var newState = [...state];
            var note = {
                id: cur,
                title: "Note " + cur,
                text: '',
            }
            newState.push(note);
            ////SAVE STATE TO LOCALSTORAGE
            storage.setItem('1', JSON.stringify(newState));
            return newState;
        case 'saveNote':
            var newState = [...state],
                index = find(newState, action.index);
            newState[index].text = action.text;
            ////SAVE STATE TO LOCALSTORAGE
            storage.setItem('1', JSON.stringify(newState));
            return newState;
        case 'deleteNote':
            var newState = [...state];
            index = find(newState, action.index);
            newState.splice(index, 1);
            ////SAVE STATE TO LOCALSTORAGE
            storage.setItem('1', JSON.stringify(newState));
            return newState;
        case 'undoNote':
            ////SAVE STATE TO LOCALSTORAGE
            storage.setItem('1', JSON.stringify(action.state));
            return action.state;
        default:
            return state;
    }
}

export default notes;