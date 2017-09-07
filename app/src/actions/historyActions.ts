function update(state){
    return {
        type: 'do',
        state     
    }
}
function undo(){
    return{
        type:'undo'        
    }
}
const historyActions = {
    do: update,
    undo: undo
}
export default historyActions;