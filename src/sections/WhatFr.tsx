import React from "react";
// @ts-ignore
import slide1Img from "../assets/img/coaches/amelie.png";
// @ts-ignore
import slide2Img from "../assets/img/coaches/amilla.png";
// @ts-ignore
import slide3Img from "../assets/img/coaches/joff.png";
// @ts-ignore
import slide4Img from "../assets/img/coaches/krist.png";
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
      title: "“Résultats instantanés”",
      description:
        "Après seulement quelques heures, j'ai ressenti une énorme progression dans ma prise de parole en public. Mon coach a pris le temps de comprendre mes besoins et mes attentes. Ce fut un plaisir de travailler avec toute l'équipe de Coachello, qui est très attentive.",
      profile: slide1Img,
      name: "Lisa Lachkar",
      position: "Directrice Régional de Riskified",
    },
    {
      title: "“Résultats tangibles”",
      description:
        "J'ai progressé à la fois sur le plan professionnel et personnel lors des cours et j'ai même pu mettre mes compétences à l'épreuve en dispensant une formation à mes collègues aujourd'hui. Je recommande vivement la plateforme Coachello.",
      profile: slide2Img,
      name: "Christie Jones ",
      position: "Responsable chez Tokyo Marine HCC",
    },
    {
      title: "“Impact mesurable”",
      description:
        "Une équipe très réactive, une application extrêmement pratique et des employés très satisfaits. Chez Gorgias, nous sommes axés sur les données et mesurons l'impact, et Coachello est en tête de liste parmi toutes les solutions que nous avons vues jusqu'à présent.",
      profile: slide3Img,
      name: "Adeline Bodemer",
      position: "Responsable RH Gorgias",
    },
    {
      title: "“Instant outcomes”",
      description:
        "Only after a few hours I felt I had grown so much in public speaking. My coach took the time to understand my needs and expectations. It was pleasure working with the whole Coachello team, which is very attentive.",
      profile: slide4Img,
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
        <p className="red-heading">Que disent nos clients ?</p>
        <h2 className="mt-3 mb-10">Une expérience incroyable</h2>
      </div>

      <div className="flex items-center">
        <div className="px-8 relative overflow-hidden md:overflow-auto">
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
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${(currentIndex * 100) / 3}%)`,
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="w-full px-2  "
                  style={{ flex: `0 0 ${100 / 3}%` }}
                >
                  <div
                    className={`rounded-2xl p-6 h-full ${
                      index % 2 == 1 ? "bg-warm-dark" : "bg-warm"
                    }`}
                  >
                    <h5 className="my-3">{slide.title}</h5>
                    <p className="text-sm mb-5">{slide.description}</p>
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
