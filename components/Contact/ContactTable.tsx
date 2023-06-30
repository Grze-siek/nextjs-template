import { IconType } from 'react-icons';
import { BiTime } from 'react-icons/bi';
import { MdPlace } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { Home } from '../../typings';

type Props = {
  data: Home;
};

export default function ContactTable({ data }: Props) {
  return (
    <div className="flex flex-col my-auto justify-center items-center md:justify-start md:items-start p-5 flex-1">
      <div className="flex flex-col text-gray-500 justify-center md:justify-start space-y-3 w-full">
        <div className="flex items-center space-x-4 border-b border-gray-300 pb-4">
          <MdPlace className="text-gray-500 h-8 w-8 transition-all hover:scale-125" />
          <p className="text-base md:text-lg lg:text-xl font-medium w-full">
            {data.address}
          </p>
        </div>
        <div className="flex items-center space-x-4 border-b border-gray-300 pb-4">
          <BiTime className="text-gray-500 h-8 w-8 transition-all hover:scale-125" />
          <div>
            <p className="text-base md:text-lg lg:text-xl font-medium">
              {data.openingHours}
            </p>
            <p className="text-base md:text-lg lg:text-xl font-medium ">
              {data.openingHoursSathurday}
            </p>
            <p className="text-base md:text-lg lg:text-xl font-medium ">
              Niedziela: Zamknięte
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4 border-b border-gray-300 pb-4">
          <BsFillTelephoneFill className="text-gray-500 h-6 w-6 transition-all hover:scale-125" />
          <p className="text-base md:text-lg lg:text-xl font-medium ">
            {data.phoneNumber}
          </p>
        </div>
        <div className="flex items-center space-x-4 border-b border-gray-300 pb-4">
          <AiOutlineMail className="text-gray-500 h-8 w-8 transition-all hover:scale-125" />
          <p className="text-base md:text-lg lg:text-xl font-medium ">
            biuro@odnowa.pl
          </p>
        </div>
      </div>
    </div>
  );
}
