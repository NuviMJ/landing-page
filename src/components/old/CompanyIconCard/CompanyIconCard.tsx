import React from 'react';
interface Props{
    icon:any;
    header:string;
    des:string;
}
const CompanyIconCard = (props:Props) => {
    return (
        <div>
            <div className="flex flex-col gap-2">
                <img width={32} src={props.icon}/>

                <h4 className="m-0 w-5/6">{props.header}</h4>
                <p className="m-0 font-medium">{props.des}</p>
            </div>
        </div>
    );
};

export default CompanyIconCard;
