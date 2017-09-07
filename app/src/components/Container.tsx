import * as React from 'react';
import { connect } from 'react-redux';

import Actions from '../actions';
import SearchBar from './SearchBar';
import NoteBoard from './NoteBoard';
// import Note from './Note';

/////IMPORT THE MOUSETRAP LIBRARY///
import * as trap from 'mousetrap';

interface ContainerProps {
    newNote: Function;
    update: Function;
    undo: Function;
    noteArray: Array<any>;
    history: Array<any>;
    search: {
        text: string;
    }
}
interface ContainerState { }

export class Container extends React.Component<ContainerProps, ContainerState>{
    constructor() {
        super();
        this.addNote = this.addNote.bind(this);
        this.undo = this.undo.bind(this);
    }
    addNote(text, id, undo) {
        const { newNote, update, noteArray } = this.props;
        update(noteArray);
        newNote();
    }
    undo() {
        const { history, undo } = this.props;        
        if (history.length) {
            var state = history[history.length - 1];                        
            ///UNDOS TO THIS STATE
            undo(state);
        }
        console.log("STACK", history.length);
    }
    render() {
        ///ADD SHORTUCTS
        trap.bind('ctrl+q', this.addNote);
        trap.bind('ctrl+z', this.undo);

        var { noteArray, search } = this.props;
        return (
            <div id="container">
                <SearchBar />
                <div className="buttons">
                    <button id="newNoteButton" onClick={this.addNote}>New</button>
                    <button id="undoButton" onClick={this.undo}>Undo</button>
                </div>
                <NoteBoard />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        noteArray: state.noteArray,
        history: state.history
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        newNote: () => {
            dispatch(Actions.newNote());
        },
        update: (state) => {
            dispatch(Actions.do(state));
        },
        undo: (state) => {
            dispatch(Actions.undoNote(state));
            dispatch(Actions.undo());
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container as any);