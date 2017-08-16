
function search(state={text: ''}, action) {
    switch (action.type) {
        case 'search':
        return{
            text : action.text
        };
        default:
            return state;
    }
}
export default search;