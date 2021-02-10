import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
import { useState } from 'react';
import ProjectList from '../ProjectList/ProjectList';
import { imgData } from '../img-data/img-data';
import Masonry from 'masonry-layout';

const masonry = () => {
    const grid = document.querySelector('.projectlist');
    const masonry = new Masonry(grid, {
    itemSelector: '.projectlist-item',
        gutter: 10,
        originBottom: false,
    });
} 

const Portfolio = () => {
    // window.onload = () => {
    //     masonry();
    // }
    const [selectedItem, setSelectedItem] = useState('All');
    const [imgArray, setImgArray] = useState(imgData);

    const onSelectFilter = (item) => {

        if(item.classList.contains('select')){
            item.classList.remove('select');
            setSelectedItem('All');
            filterImg('All');
            console.log(imgData);
            return;
        }
        Array.from(document.querySelectorAll('.unselect')).forEach(elem => {
            if(elem.classList.contains('select')) {
                elem.classList.remove('select');
                setSelectedItem('All');
                console.log('aaa');
                return;
            }
        })
        item.classList.add('select');
        filterImg(item.value);
        setSelectedItem(item.value);
        return;
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
            {/* {masonry} */}
        </div>    
    )
}

export default Portfolio
