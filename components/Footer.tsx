'use client';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import AnimatedLetters from './AnimatedLetters';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
  const aboutElements: aboutElement[] = [
    { title: 'About Us', path: '/about#about' },
    { title: 'Features', path: '/features' },
    { title: 'News', path: '/news' },
    { title: 'Careers', path: '/careers' },
  ];
  const productElements: productElement[] = [
    { title: 'New Arrival', path: '/product/new_arrival' },
    { title: 'Dicsount', path: '/product/discount' },
    { title: 'Customize', path: '/product/customize' },
  ];
  const companyElements: companyElement[] = [
    { title: 'Our Team', path: '/about#our_team' },
    { title: 'Partner with us', path: '/partner_with_us' },
    { title: 'Blog', path: '/blog' },
    { title: 'Article', path: '/article' },
  ];

  return (
    <div className="bg-light-color overflow-hidden">
      <div className="mx-auto pt-8 md:pt-20 md:px-10 lg:px-0 lg:max-w-5xl xl:max-w-6xl">
        <div className="md:flex md:justify-between pb-6 md:pb-12 border-b border-b-gray-300">
          <div className="flex-col space-y-5 mx-auto md:mx-0 max-w-max md:max-w-min lg:max-w-[200px]">
            <h3 className="text-xl font-bold text-left">
              <AnimatedLetters text="Miso - Beauty Cinic" />
            </h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [25, 0] }}
              transition={{ delay: 0.9, duration: 0.5 }}
              viewport={{ once: true }}
              className="hidden md:inline-flex text-sm text-gray-400"
            >
              We use the power of nature to produce the most maximum results.
            </motion.p>
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: [25, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              href="#"
              target="_blank"
              className="text-darkred-color flex items-center justify-center md:justify-start space-x-4"
            >
              <p>talk@miso.com</p>
              <HiOutlineArrowRight className="w-4 h-4 font-thin" />
            </motion.a>
          </div>

          <div className="hidden md:flex md:flex-col space-y-5">
            <h3 className="text-lg font-semibold text-left">
              <AnimatedLetters text="About" delayTime={0.3} />
            </h3>
            <div className="flex-col space-y-4 text-sm text-gray-400 text-left">
              {aboutElements.map((aboutElement, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, y: [25, 0] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + index / 5, duration: 0.4 }}
                  className="cursor-pointer hover:text-darkred-color"
                >
                  <Link href={aboutElement.path}>{aboutElement.title}</Link>
                </motion.p>
              ))}
            </div>
          </div>

          <div className="hidden md:flex md:flex-col space-y-5">
            <h3 className="text-lg font-semibold text-left">
              <AnimatedLetters text="Product" delayTime={0.5} />
            </h3>
            <div className="flex-col space-y-4 text-sm text-gray-400 text-left">
              {productElements.map((productElement, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, y: [25, 0] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + index / 5, duration: 0.4 }}
                  className="cursor-pointer hover:text-darkred-color"
                >
                  <Link href={productElement.path}>{productElement.title}</Link>
                </motion.p>
              ))}
            </div>
          </div>

          <div className="hidden md:flex md:flex-col space-y-5">
            <h3 className="text-lg font-semibold text-left">
              <AnimatedLetters text="Company" delayTime={0.7} />
            </h3>
            <div className="flex-col space-y-4 text-sm text-gray-400 text-left">
              {companyElements.map((companyElement, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1, y: [25, 0] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + index / 5, duration: 0.4 }}
                  className="cursor-pointer hover:text-darkred-color"
                >
                  <Link href={companyElement.path}>{companyElement.title}</Link>
                </motion.p>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-5">
            <h3 className="hidden md:inline-block text-lg font-semibold text-center">
              <AnimatedLetters text="Social media" delayTime={0.9} />
            </h3>
            <div className="flex space-x-4 text-gray-400 items-center justify-evenly md:justify-between">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.4 }}
                className="rounded-full border border-gray-400 p-[6px] cursor-pointer group hover:border-gray-700"
              >
                <AiOutlineInstagram className="h-5 w-5 group-hover:text-gray-700" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.4 }}
                className="rounded-full border border-gray-400 p-[6px] cursor-pointer group hover:border-gray-700"
              >
                <AiFillFacebook className="h-5 w-5 group-hover:text-gray-700" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.4 }}
                className="rounded-full border border-gray-400 p-[6px] cursor-pointer group hover:border-gray-700"
              >
                <AiOutlineTwitter className="h-5 w-5 group-hover:text-gray-700" />
              </motion.div>
            </div>
          </div>
        </div>
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
            <p>© 2022 Miso - Beauty Clinic</p>
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
              <p>Privacy Policy</p>
            </Link>
            <Link href="/terms-of-service">
              <p>Terms of Service</p>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
