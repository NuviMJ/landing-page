import React from "react";
import ImgContentTemplate from "../../../components/old/ImgContentTemplate/ImgContentTemplate";
// @ts-ignore
import GroupWorkShopImg from "../../../assets/img/old/GroupWorkshop.png";

const GroupWorkShop = () => {
  return (
    <ImgContentTemplate
      img={GroupWorkShopImg}
      title="Group workshops"
      des={
        <>
          <p>
            It’s great to offer fully personalised solutions, but real success
            you will obtain when each individual will work together as a team.
            Group workshops are popular for that reason.
          </p>
          <p>
            Sometimes it is cohesion that’s missing, other times leadership
            skills, or quite common an issue - everyone is aware of - but left
            unspoken.
          </p>
          <p>
            After an audit on what issue is most important to your organisation
            we will provide you with the right workshops: group training, group
            coaching or a mix between individual and group coaching.
          </p>
          <p>
            Group trainings are possible on topics as: management,
            communication, leadership, public speaking, and others, and may very
            well be offered in combination with individual coaching.
          </p>
        </>
      }
    />
  );
};

export default GroupWorkShop;
