'use client';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Divider } from '@mui/material';

function Footer() {
  return (
    <footer className="bg-light-color overflow-hidden">
      <div className="mx-auto pt-6 md:pt-12 px-4 md:px-10 lg:px-0 lg:max-w-5xl xl:max-w-6xl">
        <div className="flex flex-col mb-4 md:flex-row justify-between items-center">
          <div className="flex items-center md:space-x-4">
            <div className="relative h-40 w-40 bg-transparent object-cover">
              <Image
                fill
                style={{ objectFit: 'scale-down' }}
                src="/brand_logo_white.svg"
                alt="Logo firmowe"
              />
            </div>
            <div className="hidden md:flex flex-col text-md text-gray-500 space-y-2">
              <h3>Studio urody i masażu "Odnowa" </h3>
              <h3>Wrocławska 31a, 55-040 Bielany Wrocławskie </h3>
            </div>
          </div>

          <div className="hidden md:flex flex-col justify-center items-center space-y-3">
            <h3 className="text-md text-gray-500">Znajdziesz nas też:</h3>
            <div className="flex items-center space-x-4">
              <a target="_blank" href="#">
                <div className="rounded-full border text-gray-800 cursor-pointer border-gray-800 p-2 transition-transform hover:scale-110">
                  <AiOutlineInstagram className="w-8 h-8" />
                </div>
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/odnowastudiourodyimasazu"
              >
                <div className="rounded-full border text-gray-800 cursor-pointer border-gray-800 p-2 transition-transform hover:scale-110">
                  <AiFillFacebook className="w-8 h-8" />
                </div>
              </a>
              <a
                target="_blank"
                href="https://booksy.com/pl-pl/155907_studio-urody-i-masazu-odnowa_salon-kosmetyczny_15108_kobierzyce"
              >
                <div className="rounded-full p-2.5 border hover:scale-110 border-gray-800 transition-transform">
                  <div className="relative w-7 h-7 cursor-pointer">
                    <Image fill src="/booksy.png" alt="Booksy" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <Divider />
        <div className="text-xs md:text-sm flex flex-col md:flex-row justify-center items-center md:justify-between py-6 text-gray-500">
          <motion.div
            initial={{
              x: '-50%',
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            viewport={{ once: true }}
          >
            <p>© {new Date().getFullYear()} Studio urody i masażu ODNOWA</p>
          </motion.div>
          <motion.div
            initial={{
              x: '50%',
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            viewport={{ once: true }}
            className="hidden md:flex items-center"
          >
            <div className="h-[2px] w-8 bg-gray-500 rounded-full" />
            <div className="flex px-0 mx-0 text-center flex-col justify-center">
              <p>designed by</p>
              <p>Grzegorz Ryczkowski</p>
            </div>
            <div className="h-[2px] w-8 bg-gray-500 rounded-full" />
          </motion.div>
          <div className="flex md:hidden mt-2 items-center space-x-4">
            <a target="_blank" href="#">
              <div className="text-gray-800 cursor-pointer border-gray-800 transition-transform hover:scale-110">
                <AiOutlineInstagram className="w-[30px] h-[30px]" />
              </div>
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/odnowastudiourodyimasazu"
            >
              <div className="text-gray-800 cursor-pointer border-gray-800 transition-transform hover:scale-110">
                <AiFillFacebook className="w-[30px] h-[30px] " />
              </div>
            </a>
            <a
              target="_blank"
              href="https://booksy.com/pl-pl/155907_studio-urody-i-masazu-odnowa_salon-kosmetyczny_15108_kobierzyce"
            >
              <div className="relative w-6 h-6 cursor-pointer border-gray-800 transition-transform hover:scale-110">
                <Image fill src="/booksy.png" alt="Booksy" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
