import * as React from 'react';
import { connect } from 'react-redux';

import Actions from '../actions';
import SearchBar from './SearchBar';
import Note from './Note';

interface ContainerProps {
    newNote: Function;
    noteArray: Array<any>;
}
interface ContainerState { }

export class Container extends React.Component<ContainerProps, ContainerState>{
    constructor() {
        super();
        this.addNote = this.addNote.bind(this);
        // this.cur = 1;
    }
    addNote() {
        const { newNote } = this.props;
        newNote();
    }
    render() {
        const { noteArray } = this.props;
        var notes = noteArray.map(
            (note) => {
                return <Note 
                key={note.key}
                title={note.title}
                text= {note.text}
                lock = {note.lock}
                />
            }
        )
        return (
            <div id="container">
                <SearchBar />                
                <button id="newNoteButton" onClick={this.addNote}>+</button>
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
    return {
        newNote: () => {
            dispatch(Actions.newNote());
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container as any);