import React from "react";

// @ts-ignore
import gorgiasLogo from "../assets/img/examples/Gorgias.png";
// @ts-ignore
import hylandLogo from "../assets/img/examples/hyland.png";
// @ts-ignore

import enedisLogo from "../assets/img/examples/enedis.png";
// @ts-ignore
import qontoLogo from "../assets/img/examples/qonto.png";
// @ts-ignore
import columbiaLogo from "../assets/img/examples/colum.png";

const data = [
  {
    logo: enedisLogo,
    title: "Transformation",
    des: "Enedis accompagne la transformation de l’entreprise en investissant dans le développement de ses managers de proximité.",
  },
  {
    logo: qontoLogo,
    title: "Leadership",
    des: "Qonto développe le leadership de ses managers en intégrant Coachello dans leur parcours managérial",
  },
  {
    logo: columbiaLogo,
    title: "Coaching des équipes commerciales",
    des: "Columbia utilise le pouvoir du coaching pour booster les performances de ses équipes commerciales",
  },
  {
    logo: gorgiasLogo,
    title: "Coaching pour tous",
    des: "Gorgias rend le coaching accessible pour tous ses collaborateurs dans le monde entier",
  },
  {
    logo: hylandLogo,
    title: "Hauts potentiels",
    des: "Hyland investit dans un programme de coaching Hauts Potentiels pour augmenter la rétention, leur engagement et leur performance",
  },
];
const Example = () => {
  return (
    <div className="section bg-warm">
      <h2 className="text-center mb-8">Cas pratiques</h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-5">
        {data.map((item) => (
          <div className="rounded bg-white p-5 text-center">
            <img src={item.logo} className="h-16" />
            <h5 className="mt-5 mb-3 text-left">{item.title}</h5>
            <p className="my-3 text-left">{item.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Example;
