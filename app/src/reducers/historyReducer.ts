function history(state = [], action) {
    switch (action.type) {
        case 'do':
            var newState = [...state];
            if (newState.length == 20) {
                newState.shift();
            }
            newState.push(action.state);
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