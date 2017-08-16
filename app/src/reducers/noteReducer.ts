var cur: number = 1;
// function note(state = { cur: cur, default: '' }, action) {
function notes(state = [], action) {
    switch (action.type) {
        case 'newNote':
            // return {
            // title: "Note" + cur++,
            // text: '',
            // lock: false
            // }
            var note = {
                key : cur,
                title: "Note " + cur++,
                text: '',
                lock: false
            }
            return [...state, note];
        default:
            return state;
    }
}

export default notes;