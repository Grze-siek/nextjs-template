import { Dancing_Script, Open_Sans } from '@next/font/google';

const dancingFont = Dancing_Script({
  subsets: ['latin'],
  weight: ['500'],
});

const subtitleFont = Open_Sans({
  subsets: ['latin'],
  weight: ['300'],
});

type Prop = {
  sectionTitle: string;
  sectionSubtitle: string;
};

export default function SectionTitle({ sectionTitle, sectionSubtitle }: Prop) {
  return (
    <div className="w-3/4 min-h-fit text-center md:w-2/4">
      <h1
        className={`mb-4 text-2xl md:text-4xl lg:text-6xl text-center capitalize text-black ${dancingFont.className}`}
      >
        {sectionTitle}
      </h1>

      <div className="h-[2px] rounded-full w-16 bg-darker-color mx-auto my-2" />
      <p
        className={`text-[#585858] text-center text-sm md:text-lg lowercase ${subtitleFont.className}`}
      >
        {sectionSubtitle}
      </p>
    </div>
  );
}
