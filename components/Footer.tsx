'use client';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Divider } from '@mui/material';

type Props = {};
type aboutElement = {
  title: string;
  path: string;
};
type companyElement = {
  title: string;
  path: string;
};
type productElement = {
  title: string;
  path: string;
};

function Footer({}: Props) {
  return (
    <footer className="bg-light-color overflow-hidden">
      <div className="mx-auto pt-8 md:pt-12 md:px-10 lg:px-0 lg:max-w-5xl xl:max-w-6xl">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="relative h-28 w-28 object-cover">
              <Image fill={true} src="/logo.png" alt="Logo firmowe" />
            </div>
            <div className="flex flex-col space-y-2">
              <h3>Studio urody i masażu "Odnowa" </h3>
              <h3>Wrocławska 31a, 55-040 Bielany Wrocławskie </h3>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="rounded-full border text-gray-950 cursor-pointer border-gray-900 p-2 transition-transform hover:scale-110">
              <AiFillFacebook className="w-8 h-8" />
            </div>
            <div className="rounded-full border cursor-pointer border-gray-900 p-[10px] transition-transform hover:scale-110">
              <Image height={27} width={27} src="/booksy.png" alt="Booksy" />
            </div>
          </div>
        </div>
        <Divider />
        <div className="text-xs md:text-sm flex justify-evenly md:justify-between py-6 text-gray-500">
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
            className="space-x-4 md:space-x-8 flex"
          >
            <Link href={'/privacy-policy'}>
              <p>Polityka prywatności</p>
            </Link>
            <Link href="/terms-of-service">
              <p>Regulamin</p>
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
