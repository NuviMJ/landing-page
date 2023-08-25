import React from "react";

// @ts-ignore
import gorgiasLogo from "../assets/img/companies/gorgiasLogo.png";
// @ts-ignore
import hylandLogo from "../assets/img/companies/hylandLogo.png";
// @ts-ignore

import enedisLogo from "../assets/img/companies/enedis.png";
// @ts-ignore
import qontoLogo from "../assets/img/companies/qontoLogo.png";
// @ts-ignore
import columbiaLogo from "../assets/img/companies/columbia.png";

const data = [
  {
    logo: enedisLogo,
    title: "Transformation",
    des: "Enedis to support the transformation of the company by investing in the performance of their middle managers",
  },
  {
    logo: qontoLogo,
    title: "Leadership",
    des: "Qonto to develop their managers leadership by integrating Coachello in their global management program",
  },
  {
    logo: columbiaLogo,
    title: "Sales coaching",
    des: "Columbia uses the power of professional coaching to boost their sales performance",
  },
  {
    logo: gorgiasLogo,
    title: "Thriving workforce",
    des: "Gorgias offering Coachello on-demand to its entire workforce worldwide",
  },
  {
    logo: hylandLogo,
    title: "High-Potentials",
    des: "Hyland invest in their High-Potentials to increase retention and performance",
  },
];
const Example = () => {
  return (
    <div className="section bg-warm">
      <h2 className="text-center">Examples</h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
        {data.map((item) => (
          <div className="rounded bg-white p-5 text-center">
            <img src={item.logo} className="h-12" />
            <h5 className="mb-2 text-left">{item.title}</h5>
            <p className="my-3 text-left">{item.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Example;
