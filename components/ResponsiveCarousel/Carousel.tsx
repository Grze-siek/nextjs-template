'use client';
import { useEffect, useState } from 'react';
import TestimonialCard from './Card';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TestimonialCarousel = () => {
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(25);

  useEffect(() => {
    const interpolate = (screenWidth: number) => {
      const x1 = 100; // x value corresponding to y = 450
      const x2 = 25; // x value corresponding to y = 960
      const y1 = 300; // minimum value of y
      const y2 = 1300; // maximum value of y

      if (screenWidth <= 300) return 100;
      if (screenWidth > 1300) return 25;

      // Calculate the slope of the line
      const slope = (x2 - x1) / (y2 - y1);

      // Calculate the interpolated value of y
      const y = slope * (screenWidth - y1) + x1;

      return y;
    };

    const handleResize = () => {
      // if (screenWidth < 768) {
      //   return setCenterSlidePercentage(interpolateSmallScreen(screenWidth));
      // }
      const screenWidth = window.innerWidth;
      return setCenterSlidePercentage(interpolate(screenWidth));
    };
    console.log(centerSlidePercentage);
    // Call handleResize initially and add event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <div className="relative overflow-hidden w-full min-h-fit my-auto mx-auto">
        <Carousel
          infiniteLoop={true}
          autoPlay={true}
          showStatus={false}
          centerMode={true}
          showThumbs={false}
          showIndicators={false}
          swipeScrollTolerance={20}
          centerSlidePercentage={centerSlidePercentage}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute top-1/2 left-5 z-20 -translate-y-1/2 bg-darker-color shadow-sm rounded-full p-2 lg:p-3 opacity-80 hover:opacity-100"
              >
                <IoIosArrowBack className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute p-2 lg:p-3 top-1/2 right-5 z-20 -translate-y-1/2 bg-darker-color rounded-full opacity-80 hover:opacity-100"
              >
                <IoIosArrowForward className="h-6 w-6 lg:h-8 lg:w-8 text-white" />
              </button>
            )
          }
        >
          {[1, 2, 3, 4].map((i) => (
            <TestimonialCard key={i} />
          ))}
        </Carousel>
      </div>
    </>
  );
};
export default TestimonialCarousel;
