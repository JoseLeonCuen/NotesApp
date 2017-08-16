import * as React from 'react';
import { connect } from 'react-redux';

import Actions from '../actions';

export interface NoteProps {
    key: number;
    title: string;
    text: string;
    lock: boolean;
}
export class Note extends React.Component<NoteProps, any>{
    constructor() {
        super();        
    }
    save(){
        
    }
    render() {
        let { key,title,text,lock } = this.props;
        return (
            <div className="note">
                <div className="noteTop">
                    <label>{title}</label>
                    <button className="noteOption">Delete</button>
                    <button className="noteOption">Edit</button>                    
                </div>
                <div className="noteBody">
                    <textarea disabled={lock} value={text}></textarea>
                    <button className="saveButton" onClick={this.save}>Save</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        searchText: state.text
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
