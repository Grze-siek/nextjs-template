'use client';
import SliderBiggerScreen from './SliderBiggerScreen';
import AnimatedText from '../AnimatedText';
import { HomePage } from '../../typings';
import SliderSmallerScreen from './SliderSmallerScreen';

type Props = {
  aboutData: HomePage;
};

function About({ aboutData }: Props) {
  return (
    <div className="relative h-[600px] md:h-screen m-0 md:pt-32 md:pb-12 lg:pt-44 lg:pb-24 lg:px-20  bg-light-color flex justify-center items-center">
      <div className="flex-col justify-center absolute bg-darker-color h-2/3 w-full top-0 left-0 lg:mb-12">
        <h1 className="text-darkred-color text-center uppercase pt-16 lg:pt-24 text-md lg:text-xl font-bold pb-4">
          About us
        </h1>
        <div className="text-3xl max-w-xl lg:text-5xl lg:max-w-3xl text-center mx-auto ">
          <AnimatedText text={aboutData.aboutDescription} />
        </div>
      </div>
      <div className="hidden absolute top-2/3 -translate-y-1/2 min-[500px]:block">
        <SliderBiggerScreen images={aboutData.aboutImages} />
      </div>
      <div className="absolute top-2/3 -translate-y-1/2 min-[500px]:hidden">
        <SliderSmallerScreen images={aboutData.aboutImages} />
      </div>
    </div>
  );
}

export default About;
