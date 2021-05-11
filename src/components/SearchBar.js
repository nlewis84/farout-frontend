import React from 'react';

const SearchBar = props => {
    return (
        <div>
            <input type={"text"} onChange={props.onChange}/>
        </div>
    )
}

export default SearchBar;
