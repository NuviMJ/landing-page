import React, {InputHTMLAttributes} from 'react';
import './Input.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    placeHolder: string;
    name: string;
    icon: any;
}

const Input = ({placeHolder, name, icon, ...props}: Props) => {
    return (
        <div className="Input-container">
            <input {...props} className="Input-field" type="text" placeholder={placeHolder} name={name}/>
            <img src={icon}/>
        </div>
    );
};

export default Input;
