import * as React from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Actions from '../actions';
import Note from './Note';

interface NoteBoardProps {
    noteArray: Array<any>;
    search: {
        text: string;
    }
}
interface NoteBoardState { }

export class NoteBoard extends React.Component<NoteBoardProps, any>{
    constructor() {
        super();
    }
    render() {
        var { noteArray, search } = this.props;
        let regex = new RegExp(search.text);
        noteArray = noteArray.filter((card) => {
            return card.text.match(regex);
        });
        var notes = noteArray.map(
            (note) => {
                return <Note
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    text={note.text}
                />
            }
        )
        return (
            <div id="notes">
                {notes}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        noteArray: state.noteArray,
        search: state.search
    }
}
const mapDispatchToProps = (dispatch) => {
    return {}
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DragDropContext(HTML5Backend)(NoteBoard as any));