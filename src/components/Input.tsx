import React, {InputHTMLAttributes} from 'react';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: any;
    error?: string;
};

const Input = ({ label,className,error,children, ...props}: InputProps) => {
    return (
        <div className="w-full">
            {label && <label className=" flex py-2 font-light gap-2 w-full">{label} </label>}
            <input className={`w-full border-gray-400 border leading-5 p-2 rounded focus-visible:outline-blackBlue ${className}`} {...props}/>
            {error && <p className="text-red-500 text-xs italic mt-2">{error}</p>}
        </div>

    );
};

export default Input;
