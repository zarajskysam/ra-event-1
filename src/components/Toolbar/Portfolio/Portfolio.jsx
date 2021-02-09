import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
import { useState } from 'react';



const Portfolio = () => {
    const [selectedItem, setSelectedItem] = useState('All');
    const onSelectFilter = (item) => {
        setSelectedItem(item.value);
        if (item.value === selectedItem) {
            item.classList.add('select');
            return;
        }
        

    }
    return (
        <Toolbar filters={["All", "Websites", "Flayers", "Business Cards"]} onSelectFilter={onSelectFilter} selected={selectedItem} />
    )
}

export default Portfolio
