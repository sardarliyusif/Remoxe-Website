import React from 'react'

export const Believers = () => {
  return (
    <section className="px-4 py-5 sm:pt-[28px] sm:pb-[60px] bg-light mt-[60px] sm:mt-[112px]">
        <div className="max-w-[1280px] my-0 mx-auto">
        <div>
          <p className="text-primary text-[10px] sm:text-base font-semibold text-center">
          The first believers
          </p>
          <div className='flex flex-col justify-center items-center mt-[60px] sm:mt-[41px] sm:flex-row sm:justify-between'>
            <img className='hidden sm:inline mb-[80px] sm:mb-0' src="/icons/celo.svg" alt="believer" />
            <img className='hidden sm:inline mb-[80px] sm:mb-0' src="/icons/spirals.svg" alt="believer" />
            <img className='hidden sm:inline mb-[80px] h-[45px] sm:self-baseline sm:mb-0' src="/icons/moola.png" alt="believer" />
            <img className='hidden sm:inline mb-[80px] sm:mb-0' src="/icons/cyberbox.svg" alt="believer" />
            <img className='hidden sm:inline' src="/icons/valora.svg" alt="believer" />

            <img className='sm:hidden mb-[80px] sm:mb-0' src="/icons/celo-mob.svg" alt="believer" />
            <img className='sm:hidden mb-[80px] sm:mb-0' src="/icons/spirals-mob.svg" alt="believer" />
            <img className='sm:hidden mb-[80px] h-[45px] sm:self-baseline sm:mb-0' src="/icons/moola-mob.svg" alt="believer" />
            <img className='sm:hidden mb-[80px] sm:mb-0' src="/icons/cyberbox-mob.svg" alt="believer" />
            <img className='sm:hidden' src="/icons/valora-mob.svg" alt="believer" />
            

          </div>
        </div>
        </div>
    </section>
  )
}
