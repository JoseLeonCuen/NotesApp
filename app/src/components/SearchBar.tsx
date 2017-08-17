import * as React from 'react';
import { connect } from 'react-redux';

import Actions from '../actions';

export interface SearchProps {
    updateSearch : Function;
}

export class SearchBar extends React.Component<SearchProps, any>{
    constructor() {
        super();
        this.search = this.search.bind(this);
    }
    search(ev) {
        let text = ev.target.value,
            { updateSearch } = this.props;
        updateSearch(text);
    }
    render() {
        return (
            <div id="searchBar">
                <label>Search: </label>
                <input onChange={this.search} maxLength={25}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateSearch: (text: string) => {
            dispatch(Actions.search(text));
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar as any);


