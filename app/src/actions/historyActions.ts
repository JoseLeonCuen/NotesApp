function update(action,id,text){
    return {
        type: 'do',
        data:{
            action,
            id,
            text
        }        
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