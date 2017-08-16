import * as React from 'react';
import { connect } from 'react-redux';

import Actions from '../actions';
import SearchBar from './SearchBar';
import Note from './Note';

interface ContainerProps {
    newNote: Function;
}
interface ContainerState { }

export class Container extends React.Component<ContainerProps, ContainerState>{
    constructor(){
        super();
        this.addNote = this.addNote.bind(this);
        this.cur = 1;
    }
    addNote() {
        // var { newNote } = this.props,
        var container = document.getElementById('container'),
        note = document.createElement('Note');
        container.appendChild(note);
    }
    render() {
        return (
            <div id="container">
                <SearchBar />
                <button onClick={this.addNote}>New Note</button>
            </div>
        )
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
    null,
    mapDispatchToProps
)(Container as any);