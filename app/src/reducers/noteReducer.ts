var cur: number = 1;
function note(state = { cur: cur, default: '' }, action) {
    switch (action.type) {
        case 'newNote':
            return {
                title: "Note" + cur++,
                text: '',
                lock: false
            }
        default:
            return state;
    }
}

export default note;