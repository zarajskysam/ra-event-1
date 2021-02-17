import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
import { useState } from 'react';
import ProjectList from '../ProjectList/ProjectList';
import { imgData } from '../img-data/img-data';





const Portfolio = () => {
    const [selectedItem, setSelectedItem] = useState('All');
    const [imgArray, setImgArray] = useState(imgData);


    const onSelectFilter = (item) => {
        // if (item === selectedItem) {
        //     filterImg('All');
        //     setSelectedItem('All');
        //     console.log(item);
        // }
        if (item === selectedItem) {
            console.log(222);
            setSelectedItem('All');
            filterImg('All');
            return;
        }
        setSelectedItem(item);
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
            <Toolbar filters={["All", "Websites", "Flayers", "Business Cards"]} onSelectFilter={onSelectFilter} selected={selectedItem} data-selected={selectedItem}/>
            <ProjectList options={imgArray}/>
        </div>    
    )
}

export default Portfolio
