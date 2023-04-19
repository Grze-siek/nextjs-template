'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import { HomePage } from '../typings';
import { urlFor } from '../lib/sanity-client';

type Props = {
  landingData: HomePage;
};

function Landing({ landingData }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 0.8,
      }}
      className="h-screen p-0 lg:pt-44 lg:pb-24 lg:px-20 bg-light-color flex justify-center items-center"
    >
      <div className="relative h-full home-container w-screen md:max-w-full xl:max-w-6xl lg:max-w-5xl mx-auto">
        {landingData.firstImage !== undefined && (
          <div className="relative lg:h-52 lg:w-52 w-full h-full item1 flex justify-start items-start">
            <Image
              src={urlFor(landingData.firstImage).url()}
              alt="Picture 1"
              fill={true}
              className="object-cover absolute top-0 left-0 z-1"
            />
          </div>
        )}
        <div className="item2 inline-flex justify-start items-end">
          <video
            className="aspect-square w-screen min-[500px]:h-[180px] min-[500px]:w-[320px]"
            autoPlay
            muted
            loop={true}
          >
            <source src={landingData.video} type="video/mp4" />
          </video>
        </div>
        {landingData.secondImage !== undefined && (
          <div className="relative w-screen h-auto min-[500px]:w-full min-[500px]:h-full item3 flex min-[500px]:justify-end min-[500px]:items-end">
            <Image
              src={urlFor(landingData.secondImage).url()}
              alt="Picture 1"
              fill={true}
              className="object-cover absolute top-0 left-0 z-1"
            />
          </div>
        )}
        <div className="item4 hidden md:flex justify-right items-start">
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            transition={{ duration: 1 }}
            animate={{ y: 0, opacity: 100 }}
            className="pr-4 lg:pr-0 lg:text-xl md:text-lg text-md text-gray-500"
          >
            {landingData.shortLandingDescription}
          </motion.p>
        </div>
        <div className="absolute left-12 lg:top-8 lg:left-36 top-1/3 tracking-wide max-w-xl text-4xl lg:text-6xl z-5 text-center">
          <AnimatedText text={landingData.landingTitle} />
        </div>
      </div>
    </motion.div>
  );
}

export default Landing;
