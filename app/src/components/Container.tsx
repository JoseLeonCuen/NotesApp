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
    save: Function;
    del: Function;
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
        this.save = this.save.bind(this);
        this.delete = this.delete.bind(this);
        this.undo = this.undo.bind(this);
    }
    addNote(text, id, undo) {
        const { newNote, update, noteArray } = this.props;
        console.log(text);
        console.log(id);
        text = '';
        id = undefined;
        if (!undo) {
            let newId = noteArray.length ? noteArray[noteArray.length - 1].id + 1 : 1;
            // update('delete', newId);
        }
        newNote(text, id);
    }
    save(data) {
        const { save } = this.props;
        save(data.id, data.text);
    }
    delete(data) {
        const { del } = this.props;
        del(data.id);
    }
    undo() {
        const { history, undo } = this.props;
        if (history.length) {
            var step = history[history.length - 1];
            console.log("UNDO: ", step);
            switch (step.action) {
                case 'add':
                    this.addNote(step.text, step.id, true);
                // case 'delete':
                //     this.delete(step);
                // case 'modify':
                //     this.save(step);
            }
            undo();
        }
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
        newNote: (text, index) => {
            dispatch(Actions.newNote(text, index));
        },
        save: (index, text) => {
            dispatch(Actions.saveNote(index, text));
        },
        del: (index) => {
            dispatch(Actions.deleteNote(index));
        },
        update: (action, id, text) => {
            dispatch(Actions.do(action, id, text));
        },
        undo: () => {
            dispatch(Actions.undo());
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container as any);