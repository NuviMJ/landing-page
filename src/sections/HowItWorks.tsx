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
      title: "Assess",
      description:
        "strengths and growth opportunities, 360 feedback in Teams/Slack",
      imageUrl: slide1Img,
    },
    {
      number: "02",
      title: "Set goals",
      description: "for your coaching program",
      imageUrl: slide2Img,
    },
    {
      number: "03",
      title: "AI powered matching",
      description:
        "Based upon your objectives and your profile. You get matched with your coach, can book your first session and start your program",
      imageUrl: slide3Img,
    },
    {
      number: "04",
      title: "Personalised follow-up",
      description: "between sessions (AI) to enhance transformation",
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
      <h2 className="text-center">How it works</h2>
      <div className="flex">
        <div className="w-1/2 p-8 transition-all">
          <div className="flex flex-col justify-center mt-10">
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
