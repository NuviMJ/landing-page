import React from "react";
import {
  BuildingOne,
  CalendarThree,
  CooperativeHandshake,
  DocSuccess,
  ElectricWave,
  EveryUser,
  ExchangeTwo,
  PersonalPrivacy,
  RightUser,
  TableReport,
  UserPositioning,
  UserToUserTransmission,
} from "@icon-park/react";
// @ts-ignore
import downArrow from "../assets/img/r-arrow.png";
// @ts-ignore
import upArrow from "../assets/img/r-up-arrow.png";
const ProgramHelp = () => {
  return (
    <div className="section bg-white">
      <h2 className="text-center mb-12">
        Coachello vous aide à créer<br /> des programmes sur mesure,<br /> orientés résultat
      </h2>
      <div className="flex gap-12 flex-wrap md:flex-nowrap items-start">
        <div className="flex flex-col justify-center flex-1">
          <h3 className="bg-green rounded-full mx-auto mb-5">01.</h3>
          <ul className="bg-warm px-16 py-5 flex flex-col gap-3 text-left rounded">
            <h4 className=" text-center mb-5">Préparer</h4>
            <span className="flex items-center gap-3">
              <CooperativeHandshake className="my-auto" /> Onboarding
            </span>
            <span className="flex items-center gap-3">
              <UserPositioning className="my-auto" /> Auto-évaluation des besoins
            </span>
            <span className="flex items-center gap-3">
              <TableReport className="my-auto" /> Analyse et détermination des objectifs
            </span>
            <span className="flex items-center gap-3">
              <RightUser className="my-auto" /> Matching avec son coach
            </span>
          </ul>
        </div>
        <h2 className="relative w-0 hidden md:flex justify-center">
          <img src={downArrow} className="absolute h-4" />
        </h2>
        <div className="flex flex-col justify-center text-center flex-1">
          <h3 className="bg-green rounded-full mx-auto mb-5">02.</h3>
          <ul className="bg-warm px-12 py-5 flex flex-col gap-3 text-left rounded">
            <h4 className=" text-center mb-5">Coacher</h4>
            <span className="flex items-center gap-3">
              <DocSuccess className="my-auto" /> Mise en place d’une tripartite
            </span>
            <span className="flex items-center gap-3">
              <UserToUserTransmission className="my-auto" /> Séances de Coaching individuelles
            </span>
            <span className="flex items-center gap-3">
              <PersonalPrivacy className="my-auto" /> Exercices et ressources personnalisés
            </span>
            <span className="flex items-center gap-3">
              <CalendarThree className="my-auto" /> Mise en pratique des actions entre les séances avec des notifications
            </span>
          </ul>
        </div>
        <h2 className="relative w-0 hidden md:flex justify-center">
          <img src={upArrow} className="absolute h-4" />
        </h2>

        <div className="flex flex-col justify-center text-center flex-1">
          <h3 className="bg-green rounded-full mx-auto mb-5">03.</h3>
          <ul className="bg-warm px-8 py-5 flex flex-col gap-3 text-left rounded">
            <h4 className=" text-center mb-5">Récolter</h4>
            <span className="flex items-center gap-3">
              <ElectricWave className="my-auto" /> Évaluation de l’impact (par le coaché et son entourage professionnel)
            </span>
            <span className="flex items-center gap-3">
              <EveryUser className="my-auto" />
              Identification des besoins systémiques et mise en place de programmes collectifs (coaching de groupe, co-développement, médiation, formations...)
            </span>
            <span className="flex items-center gap-3">
              <ExchangeTwo className="my-auto" /> Déploiement d’une culture de coaching en généralisant la posture de manager coach
            </span>
            <span className="flex items-center gap-3">
              <BuildingOne className="my-auto" />Succès de la transformation de l’organisation à long terme
            </span>
          </ul>
        </div>
      </div>
      <div className="mt-5">
        <button className="dashboard-button rounded-full bg-black mx-auto">
          Discutez de votre projet avec un expert
        </button>
      </div>
    </div>
  );
};

export default ProgramHelp;
