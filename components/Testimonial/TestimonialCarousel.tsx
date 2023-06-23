'use client';
import React, { useState } from 'react';
import TestimonialCard from './TestimonialCard';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import SectionTitle from '../SectionTitle';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

type Testimonial = {
  userName: string;
  value: number;
  date: string;
  fromWhere: string;
  description: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    userName: 'Facebook User',
    value: 5,
    date: '2022-10-12',
    fromWhere: 'Review from Facebook',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ducimus beatae minima officiis ipsam ea corporis temporibus velit sequi iusto voluptatem tempora nulla at, quo labore laboriosam facere animi iure.',
    image: '/Facebook-logo.svg',
  },
  {
    userName: 'Facebook User',
    value: 5,
    date: '2022-10-12',
    fromWhere: 'Review from Facebook',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ducimus beatae minima officiis ipsam ea corporis temporibus velit sequi iusto voluptatem tempora nulla at, quo labore laboriosam facere animi iure.',
    image: '/Facebook-logo.svg',
  },
  {
    userName: 'Facebook User',
    value: 5,
    date: '2022-10-12',
    fromWhere: 'Review from Facebook',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ducimus beatae minima officiis ipsam ea corporis temporibus velit sequi iusto voluptatem tempora nulla at, quo labore laboriosam facere animi iure.',
    image: '/Facebook-logo.svg',
  },
  {
    userName: 'Facebook User',
    value: 5,
    date: '2022-10-12',
    fromWhere: 'Review from Facebook',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ducimus beatae minima officiis ipsam ea corporis temporibus velit sequi iusto voluptatem tempora nulla at, quo labore laboriosam facere animi iure.',
    image: '/Facebook-logo.svg',
  },
  {
    userName: 'Facebook User',
    value: 5,
    date: '2022-10-12',
    fromWhere: 'Review from Facebook',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores ducimus beatae minima officiis ipsam ea corporis temporibus velit sequi iusto voluptatem tempora nulla at, quo labore laboriosam facere animi iure.',
    image: '/Facebook-logo.svg',
  },
];

const TestimonialCarousel = () => {
  const carouselRef = React.useRef(null);
  return (
    <>
      <SectionTitle title={'Opinie naszych klientów'} />
      <div className="relative overflow-hidden h-[480px] w-full my-auto mx-auto">
        <Carousel
          infiniteLoop={true}
          autoPlay={true}
          showStatus={false}
          centerMode={true}
          showThumbs={false}
          showIndicators={false}
          centerSlidePercentage={25}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute top-1/2 left-5 z-20 -translate-y-1/2 bg-darker-color shadow-sm rounded-full p-3 hover:opacity-80"
              >
                <IoIosArrowBack className="h-8 w-8 text-white" />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute p-3 top-1/2 right-5 z-20 -translate-y-1/2 bg-darker-color rounded-full hover:opacity-80"
              >
                <IoIosArrowForward className="h-8 w-8 text-white" />
              </button>
            )
          }
        >
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} {...testimonial} />
          ))}
        </Carousel>
      </div>
    </>
  );
};
export default TestimonialCarousel;
