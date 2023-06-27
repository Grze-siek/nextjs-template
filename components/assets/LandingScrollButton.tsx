'use client';
import { MutableRefObject } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { IoIosArrowDown } from 'react-icons/io';

type Props = {
  tag: MutableRefObject<null>;
};

export default function landingScrollButton({ tag }: Props) {
  const scroll = (tag: any) => {
    smoothscroll.polyfill();
    tag.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };
  return (
    <IoIosArrowDown
      onClick={() => scroll(tag)}
      className="absolute cursor-pointer z-10 bottom-4 left-1/2 animate-bounce transform -translate-x-1/2 h-10 w-10 text-white shadow-sm"
    />
  );
}
