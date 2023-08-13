import React from 'react';

interface Props {
    img: any;
    logo: any;

    header: string;
    rightContentE: any;
}

const CompanyCaseStudyTemplate = (prop: Props) => {
    return (
        <div className="p-8 sm:p-24 flex flex-col bg-[#fcf1e699] md:flex-row md:gap-4 gap-1">
            <div className="flex-1 pr-12 flex flex-col items-stretch">
                <div className="h-full">

                    <img className="w-[200px]" src={prop.logo}/>
                    <h2 className="">{prop.header}</h2>
                </div>
                <img className={"w-full"} src={prop.img}/>
            </div>
            <div className="flex-1">
                {prop.rightContentE}
            </div>

        </div>

    )
        ;
};

export default CompanyCaseStudyTemplate;
