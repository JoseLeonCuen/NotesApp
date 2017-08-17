import * as React from 'react';
import { connect } from 'react-redux';

import Actions from '../actions';
import SearchBar from './SearchBar';
import Note from './Note';

/////IMPORT THE MOUSETRAP LIBRARY///
import * as trap from 'mousetrap';

interface ContainerProps {
    newNote: Function;
    noteArray: Array<any>;
    search: {
        text: string;
    }
}
interface ContainerState { }


export class Container extends React.Component<ContainerProps, ContainerState>{
    constructor() {
        super();
        this.addNote = this.addNote.bind(this);
    }
    addNote() {
        const { newNote } = this.props;
        newNote();
    }
    render() {
        trap.bind('ctrl+q', this.addNote);
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
                    lock={note.lock}
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