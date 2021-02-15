import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
import { useState } from 'react';
import ProjectList from '../ProjectList/ProjectList';
import { imgData } from '../img-data/img-data';





const Portfolio = () => {
    const [selectedItem, setSelectedItem] = useState('All');
    const [imgArray, setImgArray] = useState(imgData);
    const [styleButton, setStyleButton] = useState('unselect');


    const onSelectFilter = (item) => {
        filterImg(item);
    }

    const filterImg = (value) => {
        if (value === 'All') {
            setImgArray(imgData);
            return;
        }
        
        const newArr = imgData.filter(item => item.category === value);
        setImgArray(newArr);
    }


    return (
        <div className="container">
            <Toolbar buttonStyle={styleButton} filters={["All", "Websites", "Flayers", "Business Cards"]} onSelectFilter={onSelectFilter} selected={selectedItem} data-selected={selectedItem}/>
            <ProjectList options={imgArray}/>
        </div>    
    )
}

export default Portfolio
