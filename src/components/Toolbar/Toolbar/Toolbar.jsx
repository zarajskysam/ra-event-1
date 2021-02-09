import React from 'react';
import './toolbar.css';


const Toolbar = (props) => {
    const { filters, selected, onSelectFilter } = props;
    const selectToolbar = (e) => {
        onSelectFilter(e.target);
    }
    return (
        filters.map(filter => (
            <button className='unselect' onClick={selectToolbar} selected={selected} key={filter} value={filter}>{filter}</button>
        ))
    )
}

export default Toolbar
