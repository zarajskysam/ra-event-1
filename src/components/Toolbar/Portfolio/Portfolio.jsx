import React from 'react';
import Toolbar from '../Toolbar/Toolbar';

const toolbarValue = [{
    value: 'All'
},{
    value: 'Websites'
}, {
    value: 'Flayers'
}, {
    value: 'Business Cards'
}]








const Portfolio = () => {
    
    const changeType = (responce, value, item) => {
        
    }
    return (
        <div className="toolbar-container">
            {toolbarValue.map(options => (<Toolbar value={options.value} key={options.value} toolbarData={changeType}/>))}
        </div>    
    )
}

export default Portfolio
