import { IconType } from 'react-icons';
import { BiTime } from 'react-icons/bi';
import { MdPlace } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

export default function ContactTable() {
  return (
    <div className="flex flex-col my-auto justify-start items-start p-5 flex-1">
      <div className="flex flex-col text-gray-500 justify-start space-y-3 w-full">
        <div className="flex items-center space-x-4 border-b border-gray-300 pb-4">
          <MdPlace className="text-gray-500 h-8 w-8 transition-all hover:scale-125" />
          <p className="text-xl font-medium w-full">
            Wrocławska 31a, 55-040 Bielany Wrocławskie
          </p>
        </div>
        <div className="flex items-center space-x-4 border-b border-gray-300 pb-4">
          <BiTime className="text-gray-500 h-8 w-8 transition-all hover:scale-125" />
          <div>
            <p className="text-lg font-medium">
              Poniedziałek - Piątek: 9:00 - 21:00
            </p>
            <p className="text-lg font-medium ">Sobota: 10:00 - 17:00</p>
            <p className="text-lg font-medium ">Niedziela: Zamknięte</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 border-b border-gray-300 pb-4">
          <BsFillTelephoneFill className="text-gray-500 h-6 w-6 transition-all hover:scale-125" />
          <p className="text-lg font-medium ">601 753 909</p>
        </div>
        <div className="flex items-center space-x-4 border-b border-gray-300 pb-4">
          <AiOutlineMail className="text-gray-500 h-8 w-8 transition-all hover:scale-125" />
          <p className="text-lg font-medium ">biuro@odnowa.pl</p>
        </div>
      </div>
    </div>
  );
}
