import React from "react";
// @ts-ignore
import slide1Img from "../assets/img/coaches/amelie.png";
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
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const What = () => {
  const slides = [
    {
      title: "“Instant outcomes”",
      description:
        "Only after a few hours I felt I had grown so much in public speaking. My coach took the time to understand my needs and expectations. It was pleasure working with the whole Coachello team, which is very attentive.",
      profile: slide1Img,
      name: "Lisa Lachkar",
      position: "Regional Director of Riskified",
    },
    {
      title: "“Tangible results”",
      description:
        "I grew both professionally and personally during the courses and even got to put it to the test whilst delivering some training to my colleagues today. I highly recommend Coachello platform.",
      profile: slide1Img,
      name: "Christie Jones ",
      position: "Manager at Tokyo Marine HCC",
    },
    {
      title: "“Measurable impact”",
      description:
        "Very responsive team, super convenient application, and very happy employees. At Gorgias we are data-driven and measure impact and Coachello is on top of the list form all the solutions we have seen so far.",
      profile: slide1Img,
      name: "Adeline Bodemer",
      position: "Head of People Gorgias",
    },
    {
      title: "“Instant outcomes”",
      description:
        "Only after a few hours I felt I had grown so much in public speaking. My coach took the time to understand my needs and expectations. It was pleasure working with the whole Coachello team, which is very attentive.",
      profile: slide1Img,
      name: "Lisa Lachkar",
      position: "Regional Director of Riskified",
    },
    {
      title: "“Instant outcomes”",
      description:
        "Only after a few hours I felt I had grown so much in public speaking. My coach took the time to understand my needs and expectations. It was pleasure working with the whole Coachello team, which is very attentive.",
      profile: slide1Img,
      name: "Lisa Lachkar",
      position: "Regional Director of Riskified",
    },
  ];

  const { currentIndex, goToSlide, goToNextSlide, goToPreviousSlide } =
    useCarousel({
      totalSlides: slides.length - 2,
      autoPlayInterval: 5000,
    });

  return (
    <div className="section bg-white">
      <div className="text-center">
        <p className="red-heading">What our clients say</p>
        <h2>Incredible experience</h2>
      </div>

      <div className="flex items-center">
        <div className="px-8 relative">
          <img
            onClick={goToPreviousSlide}
            className="absolute left-0 my-auto w-8 h-8 top-1/2 bottom-1/2"
            src={arrowLeft}
          />
          <img
            onClick={goToNextSlide}
            className="absolute right-0 my-auto w-8 h-8 top-1/2 bottom-1/2"
            src={arrowRight}
          />

          <div className="overflow-hidden flex ">
            <div
              className="flex transition-transform duration-500 gap-5"
              style={{
                transform: `translateX(-${(currentIndex * 100) / 3}%)`,
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="rounded-2xl w-full even:bg-warm odd:bg-warm-dark"
                  style={{ flex: `0 0 ${100 / 3}%` }}
                >
                  <div className="p-6 h-full ">
                    <h5 className="m-2">{slide.title}</h5>
                    <p className=" text-sm ">{slide.description}</p>
                    <div className="flex items-center gap-5">
                      <img
                        src={slide.profile}
                        alt="Profile"
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="">
                        <p className="font-normal my-1 text-sm">{slide.name}</p>
                        <p className="text-gray my-1 text-sm">
                          {slide.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="flex gap-3 items-center justify-center">
        {Array.from({ length: slides.length - 2 }, (_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full w-6 h-6 ${
              currentIndex === index ? "bg-orange" : "bg-gray"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default What;
