import React from 'react';
 import './DropDown.scss'

interface Props {
    placeHolder:string;
    name:string;
    icon:any;
}
const DropDown = (prop:Props) => {
    return (

        <div className="DropDown-container">
            <input className="DropDown-field" type="text" placeholder={prop.placeHolder} name={prop.name}/>
            <img src={prop.icon} />
        </div>
    );
};

export default DropDown;
