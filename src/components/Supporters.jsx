import React from "react";

export const Supporters = () => {
  return (
    <section className="px-4 py-5 sm:pt-[43px] sm:pb-[70px] bg-dark">
      <div className="max-w-[1280px] my-0 mx-auto">
        <p className="text-primary text-[10px] sm:text-base font-semibold text-center">
          Proudly backed by industry leaders
        </p>
        <div className="flex justify-between pl-8 pr-4 sm:px-28 mt-8 sm:mt-[80px]">
            <img className="w-[65px] sm:w-[218px]" src="/icons/orangedao.svg" alt="leader" />
            <img className="w-[50px] sm:w-[111px]" src="/icons/flori.svg" alt="leader" />
            <img className="w-[116px] sm:w-[211px]" src="/icons/allogon.svg" alt="leader" />
        </div>
        <div className="sm:flex sm:justify-between sm:mt-[100px]">
        <div className="border w-full sm:w-[450px] rounded-md border-primary my-[40px] sm:my-0">
            <div className="p-4 flex items-center">
                <img className="sm:w-[70px] mr-[14px] sm:mr-5" src="/icons/rene.svg" alt="rene" />
                <div>
                    <p className="text-white text-sm sm:text-2xl font-medium">Rene Reinsberg</p>
                    <p className="text-greylish text-[10px] sm:text-base font-medium">Celo Foundation</p>
                </div>
            </div>
        </div>
        <div className="border w-full sm:w-[450px] rounded-md border-primary">
            <div className="p-4 flex items-center">
                <img className="sm:w-[70px] mr-[14px] sm:mr-5" src="/icons/merek.svg" alt="rene" />
                <div>
                    <p className="text-white text-sm sm:text-2xl font-medium">Marek Olszewski</p>
                    <p className="text-greylish text-[10px] sm:text-base font-medium">Valora & Celo Foundation</p>
                </div>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
};
