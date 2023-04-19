'use client';
import AnimatedLetters from './AnimatedLetters';
import { motion } from 'framer-motion';
import { urlFor } from '../lib/sanity-client';
import { useRouter } from 'next/navigation';
import { AboutPage } from '../typings';

type Props = {
  data: AboutPage;
};

function AboutPageClient({ data }: Props) {
  const router = useRouter();
  return (
    <>
      <div
        id="about"
        className="tracking-wide text-3xl flex justify-center md:text-4xl lg:text-6xl z-5 text-center"
      >
        <AnimatedLetters text="About us" />
      </div>
      <div className="bg-darker-color rounded-3xl lg:rounded-full mt-8 mb-16">
        <p className="text-xl max-w-4xl mx-auto text-justify px-14 lg:px-8 py-12 text-gray-600">
          {data?.description}
        </p>
      </div>

      <div
        id="our_team"
        className="tracking-wide text-3xl flex justify-center md:text-4xl lg:text-6xl z-5 text-center mb-8"
      >
        <AnimatedLetters text="Our Team" />
      </div>

      <div className="flex w-full lg:max-w-5xl xl:max-w-6xl overflow-x-scroll z-20 overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-darkred-color scrollbar-thumb-rounded gap-12">
        {data?.team.map((person) => {
          return (
            <motion.div
              initial={{
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              key={person.name}
              className="card w-full px-4  snap-center md:w-[500px] md:px-0 lg:w-1/2 bg-base-100 shadow-xl flex-shrink-0"
            >
              <figure>
                <img
                  className="w-full h-96 object-cover"
                  src={urlFor(person.image).url()}
                  alt={person.name}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{person.name}</h2>
                <p>{person.description}</p>
                <div className="card-actions justify-center">
                  <button
                    onClick={() =>
                      router.push(
                        'https://booksy.com/pl-pl/155907_studio-urody-i-masazu-odnowa_salon-kosmetyczny_15108_kobierzyce#ba_s=sr_1'
                      )
                    }
                    className="btn bg-darkred-color border-darkred-color"
                  >
                    Make an appointment
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

export default AboutPageClient;
