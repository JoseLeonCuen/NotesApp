function history(state = [], action) {
    switch (action.type) {
        case 'do':
            console.log(action.data);
            var newState = [...state];
            if (newState.length == 10) {
                newState.shift();
            }
            newState.push(action.data);
            return newState;
        case 'undo':
            var newState = [...state];
            newState.pop();
            return newState;
        default:
            return state;
    }
}

export default history;