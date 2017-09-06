import * as React from 'react';
import { connect } from 'react-redux';
// import { DragSource, DropTarget } from 'react-dnd';

import Actions from '../actions';

/////IMPORT THE MOUSETRAP LIBRARY///
import * as trap from 'mousetrap';

// const noteSource = {
//     beginDran(props) {
//         return {
//             text: props.text
//         }
//     }
// }

// const noteSource = {
//     canDrag(props) {
//         return props.isReady;
//     },
//     isDragging(props, monitor) {
//         return monitor.getItem().id === props.id;
//     },
//     beginDrag(props, monitor, component) {
//         const item = { id: props.id };
//         return item;
//     },
//     endDrag(props, monitor, component) {
//         if (!monitor.didDrop()) {
//             return;
//         }
//         const item = monitor.getItem();
//         const dropResult = monitor.getDropResult();
//     }
// };

// function collect(connect, monitor) {
//     return {
//         connectDragSource: connect.dragSource(),
//         isDragging: monitor.isDragging()
//     };
// }

// const noteSpec = {
//     isDragging: Boolean,
//     connectDragSource: Function
// }
export interface NoteProps {
    id: number;
    title: string;
    text: string;
    save: Function;
    del: Function;
    history: Array<any>;
    update: Function;
    undo: Function;
}
export class Note extends React.Component<NoteProps, any>{
    constructor() {
        super();
        this.save = this.save.bind(this);
        this.delete = this.delete.bind(this);
    }
    save(ev) {
        const { save, id ,update} = this.props;
        var text = ev.target.value;
        // update('modify',id,text.slice(0,-1));
        save(id, text);
    }
    delete(ev) {
        const { del, id , update , text} = this.props;
        // var text = ev.target.parentNode.parentNode.children[1].firstChild.value;        
        update('add',id,text);
        del(id);
    }
    render() {
        var { id, title, text } = this.props;
        return (
            <div className="note">
                <div className="noteTop">
                    <label>{title}</label>
                    <button className="noteOption" onClick={this.delete}>X</button>
                </div>
                <div className="noteBody">
                    <textarea onChange={this.save} defaultValue={text}></textarea>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        history: state.history
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        save: (index, text) => {
            dispatch(Actions.saveNote(index, text));
        },
        del: (index) => {
            dispatch(Actions.deleteNote(index));
        },
        update: (action,id,text)=>{
            dispatch(Actions.do(action,id,text));
        }
    }
}
// export default connect(
//     null,
//     mapDispatchToProps
// )(DragSource('note', noteSource, collect)(Note as any));

// export default DragSource('note',noteSource,collect)(connect(
//     null,
//     mapDispatchToProps
// )(Note as any));

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Note as any);
