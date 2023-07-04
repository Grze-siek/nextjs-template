export default function Card() {
  return (
    <>
      <div className="bg-white lg:flex-shrink-0 w-[16rem] h-[20rem] md:w-[18rem] md:h-[24rem] lg:w-[20rem] lg:h-[28rem] lg:my-4 drop-shadow-xl my-2 rounded-xl lg:rounded-2xl mx-auto  overflow-hidden">
        <div className="flex m-auto flex-col justify-center py-8 px-6 lg:py-14 lg:px-12">
          <h5 className="relative text-base md:text-xl lg:text-2xl text-center font-sans font-bold mb-2 lg:mb-4">
            UserName
            <div className="absolute h-[1px] bg-black w-14 -translate-x-1/2 -bottom-2 left-1/2" />
          </h5>
          <p className="mb-4 text-gray-500 text-xs font-semibold font-sans text-center">
            date
          </p>
          <div className="h-[6rem] md-[8rem] lg:h-[10rem] scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-light-color overflow-y-scroll">
            <h3 className="mb-4 text-sm lg:text-base text-center overflow-y-auto">
              description
            </h3>
          </div>
          <div className="relative mx-auto w-full h-12 md:h-20 lg:h-24 overflow-hidden object-cover block"></div>
        </div>
      </div>
    </>
  );
}
