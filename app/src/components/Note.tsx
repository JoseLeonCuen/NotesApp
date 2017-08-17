import * as React from 'react';
import { connect } from 'react-redux';

import Actions from '../actions';

export interface NoteProps {
    id: number;
    title: string;
    text: string;
    save: Function;
    del: Function;
}
export class Note extends React.Component<NoteProps, any>{
    constructor() {
        super();
        this.save = this.save.bind(this);
        this.delete = this.delete.bind(this);
    }
    save(ev) {
        const { save, id } = this.props;
        var text = ev.target.value;                
        save(id, text);
    }
    delete() {
        const { del, id } = this.props;
        del(id);
    }
    render() {
        var { id, title, text, lock } = this.props,
            buttonClass = lock ? "hide" : "saveButton";
        return (
            <div className="note">
                <div className="noteTop">
                    <label>{title}</label>
                    <button className="noteOption" onClick={this.delete}>Delete</button>
                </div>
                <div className="noteBody">
                    <textarea disabled={lock} onChange={this.save} defaultValue={text}></textarea>
                </div>
            </div>
        )
    }
}
// const mapStateToProps = (state) => {
//     return {
//         searchText: state.text
//     }
// }
const mapDispatchToProps = (dispatch) => {
    return {
        save: (index, text) => {
            dispatch(Actions.saveNote(index, text));
        },
        del: (index) => {
            dispatch(Actions.deleteNote(index));
        }
    }
}
export default connect(
    null,
    mapDispatchToProps
)(Note as any);
