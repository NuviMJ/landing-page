import { useState, useCallback, useEffect } from "react";

interface UseCarouselProps {
  totalSlides: number;
  autoPlayInterval?: number;
}

interface UseCarouselResult {
  currentIndex: number;
  goToSlide: (index: number) => void;
  goToNextSlide: () => void;
  goToPreviousSlide: () => void;
}

const useCarousel = ({
  totalSlides,
  autoPlayInterval = 0,
}: UseCarouselProps): UseCarouselResult => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  }, [totalSlides]);

  const goToPreviousSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  }, [totalSlides]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (autoPlayInterval > 0) {
      intervalId = setInterval(goToNextSlide, autoPlayInterval);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [autoPlayInterval, goToNextSlide]);

  return {
    currentIndex,
    goToSlide,
    goToNextSlide,
    goToPreviousSlide,
  };
};

export default useCarousel;
