import { Dancing_Script, Open_Sans } from 'next/font/google';

const dancingFont = Dancing_Script({
  subsets: ['latin'],
  weight: ['500'],
});

const subtitleFont = Open_Sans({
  subsets: ['latin'],
  weight: ['300'],
});

type Prop = {
  title: string;
  subtitle: string;
};

export default function SectionTitle({ title, subtitle }: Prop) {
  return (
    <div className="w-3/4 mt-16 mb-12 min-h-fit mx-auto text-center md:w-2/4">
      <h1
        className={`text-2xl md:text-4xl lg:text-6xl text-center capitalize text-black ${dancingFont.className}`}
      >
        {title}
      </h1>

      <div className="h-[2px] rounded-full max-w-[80px] my-5 bg-darker-color mx-auto" />
      <p
        className={`text-[#585858] text-center text-sm md:text-lg lowercase ${subtitleFont.className}`}
      >
        {subtitle}
      </p>
    </div>
  );
}
