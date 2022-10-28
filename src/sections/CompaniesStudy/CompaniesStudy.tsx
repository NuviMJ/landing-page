import React from 'react';
// @ts-ignore
import MeilleursLogo from "../../assets/img/meilleursLogo.png";
// @ts-ignore
import GorgiasLogo from "../../assets/img/gorgiasLogo.png";
import {Link} from "gatsby";


const CompaniesStudy = () => {
    return (
        <div className="flex flex-wrap gap-14 justify-center p-5 sm:p-24 bg-[#FDF4EA]">
            <button className="border-transparent border-4 rounded-2xl p-3 hover:border-gray-400">
                <Link to='/meilleurs-agents'> <img src={MeilleursLogo} width={300}/></Link>
            </button>
            <button className="border-transparent border-4 rounded-2xl p-3 hover:border-gray-400">
                <Link to='/gorgias'> <img src={GorgiasLogo} width={300}/></Link>
            </button>
        </div>
    );
};

export default CompaniesStudy;
