'use client';
import { HomePage } from '../typings';
import AnimatedText from './AnimatedText';
import SlidingGallery from './assets/Sliding_Gallery/SlidingGallery';

type Props = {
  galleryData: HomePage;
};

function Gallery({ galleryData }: Props) {
  return (
    <div className="relative h-[500px] md:h-screen bg-darker-color">
      <SlidingGallery images={galleryData.lastSectionImages} />
      <img
        src="/background_flowers.svg"
        className="absolute h-1/2 w-1/2 bottom-0 left-0 transform -translate-x-1/4 opacity-20"
      />
      <img
        src="/background_flowers.svg"
        className="absolute h-1/2 w-1/2 mirror bottom-0 right-0 opacity-20"
      />
      <div className="h-full w-full flex flex-col space-y-10 justify-center items-center">
        <div className="lg:text-6xl md:text-4xl text-3xl max-w-sm md:max-w-xl lg:max-w-3xl text-center mx-auto">
          <AnimatedText text={galleryData.lastSectionDescription} />
        </div>
        <p className="text-lg md:text-xl block text-center text-gray-500 max-w-sm min-[500px]:max-w-md lg:max-w-lg mx-auto">
          {galleryData.lastSectionSmallText}
        </p>
      </div>
    </div>
  );
}

export default Gallery;
