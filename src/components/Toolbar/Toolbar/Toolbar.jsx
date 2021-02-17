import React from 'react';
import './toolbar.css';



const Toolbar = (props) => {
    const { filters, selected, onSelectFilter, buttonStyle } = props;


    
    return (
        filters.map(filter => (
            <button className={(filter === selected) ? "select" : "unselect"} onClick={() => onSelectFilter(filter)} selected={selected} data-selected={selected} key={filter} value={filter}>{filter}</button>
        ))
    )
}

export default Toolbar
