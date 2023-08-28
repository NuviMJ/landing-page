import React, { useState } from "react";
// @ts-ignore
import slide1Img from "../assets/img/howItWorks/slide1.png";
// @ts-ignore
import slide2Img from "../assets/img/howItWorks/slide2.png";
// @ts-ignore
import slide3Img from "../assets/img/howItWorks/slide3.png";
// @ts-ignore
import slide4Img from "../assets/img/howItWorks/slide4.png";
import useCarousel from "../hooks/useCarousel";
// @ts-ignore
import arrowLeft from "../assets/img/arrow-left.png";
// @ts-ignore
import arrowRight from "../assets/img/arrow-right.png";

const HowItWorks = () => {
  const slides = [
    {
      number: "01",
      title: "Evaluez",
      description:
        "Vos points forts et axes d’amélioration via une auto-évaluation des besoins, et un feedback 360 de votre entourage professionnel dans l’application.",
      imageUrl: slide1Img,
    },
    {
      number: "02",
      title: "Déterminez les objectifs",
      description: "de votre programme de coaching",
      imageUrl: slide2Img,
    },
    {
      number: "03",
      title: "Choisissez votre coach grâce à l’IA",
      description:
        "en fonction de vos objectifs et des réponses à votre auto-évaluation, nous vous proposons 2 coachs.  Vous pouvez choisir celui que vous préférez, réserver votre première séance et commencer votre programme.",
      imageUrl: slide3Img,
    },
    {
      number: "04",
      title: "Suivi personnalisé",
      description: "entre les séances pour vous aider à atteindre vos objectifs (grâce à l’IA)",
      imageUrl: slide4Img,
    },
    // Add more slides as needed
  ];

  const { currentIndex, goToNextSlide, goToPreviousSlide } = useCarousel({
    totalSlides: slides.length,
    autoPlayInterval: 5000,
  });

  return (
    <div className="section bg-white">
      <h2 className="text-center">Comment ça marche?</h2>
      <div className="flex">
        <div className="w-1/2 p-8">
          <div className="flex flex-col justify-center mt-16">
            <h2 className="rounded-full bg-green font-bold mb-2 mr-auto h-16 w-16 p-2">
              {slides[currentIndex].number}.
            </h2>
            <h3 className="text-xl font-semibold mb-2">
              {slides[currentIndex].title}
            </h3>
            <p className="text-gray-600">{slides[currentIndex].description}</p>
          </div>
        </div>
        <div className="w-1/2 p-12 relative">
          <img
            onClick={goToPreviousSlide}
            className="absolute left-0 my-auto w-8 h-8 top-1/2"
            src={arrowLeft}
          />
          <img
            onClick={goToNextSlide}
            className="absolute right-0 my-auto w-8 h-8 top-1/2"
            src={arrowRight}
          />

          <div className="overflow-hidden flex ">
            <div
              className="flex transition-transform duration-500 "
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="w-full"
                  style={{ flex: `0 0 100%` }}
                >
                  <img src={slide.imageUrl} alt="Content" className="w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
