import * as React from 'react';
import { connect } from 'react-redux';

import Actions from '../actions';

export interface NoteProps {
    data: {
        title: string;
        text: string;
        lock: boolean;
    }
}
export class Note extends React.Component<NoteProps, any>{
    constructor() {
        super();
        this.state = this.props.data;
    }
    render() {
        let { data } = this.state;
        return (
            <div className="note">
                <div className="noteTop">
                    <label>{data.title}</label>
                    <label className="noteOption">Edit</label>
                    <label className="noteOption">Delete</label>
                </div>
                <div className="noteBody">
                    <textarea disabled={data.lock}>{data.text}</textarea>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        searchText: state.text,
        data: {
            title: state.title,
            text: state.text,
            lock: state.lock
        }
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Note as any);
