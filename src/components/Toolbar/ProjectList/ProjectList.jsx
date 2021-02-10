import React from 'react';
import './project-list.css';

const ProjectList = (props) => {
    const { options } = props;
    let i = 0;
    

    return (
        <div className='projectlist' >
            {options.map(option => (
                <div className='projectlist-item' key={i++}>
                    <img  src={option.img} alt={option.category} data-type={option.category} />
                </div>
            ))}
        </div>
    )
}

export default ProjectList