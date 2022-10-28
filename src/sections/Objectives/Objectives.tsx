import React from 'react';
interface Props{
    children:any;


}

const Objectives = (props:Props) => {
    return (
        <div style={{backgroundColor:"#FDF4EA"}} className={"p-8 sm:p-24"}>



           <h2>Objectives</h2>
            {props.children}
        </div>
    );
};

export default Objectives;
