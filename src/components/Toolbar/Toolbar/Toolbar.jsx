import React from 'react';
import { useState } from 'react';
import './toolbar.css';

const Toolbar = (props) => {

    const { value, toolbarData } = props;
    const [selectdata, setSelectData] = useState(false);
    const [buttonStyle, setButtonStyle] = useState('unselect');

    const seeSelect = (e) => {
        changeStyle();
        setSelectData(!selectdata);
        toolbarData(!selectdata, value, e.target);
    }

    const changeStyle = () => {
        if (selectdata) {
            setButtonStyle('unselect');
        } else if (!selectdata) {
            setButtonStyle('select');
        } 
    }

    return (
        <button onClick={seeSelect} className={buttonStyle} key={value}>{value}</button>
    )
}

export default Toolbar
