import React from 'react';
 import './Input.scss'

interface Props {
    placeHolder:string;
    name:string;
    icon:any;
}
const Input = (prop:Props) => {
    return (
        <div className="Input-container">
            <input disabled={true} className="Input-field" type="text" placeholder={prop.placeHolder} name={prop.name}/>
            <img src={prop.icon} />
        </div>
    );
};

export default Input;
