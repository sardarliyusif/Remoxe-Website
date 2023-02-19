import React from 'react'

export const Believers = () => {
  return (
    <section className="px-4 py-5 sm:pt-[28px] sm:pb-[60px] bg-light mt-[60px] sm:mt-[112px]">
        <div className="max-w-[1280px] my-0 mx-auto">
        <div>
          <p className="text-primary text-[10px] sm:text-base font-semibold text-center">
          The first believers
          </p>
          <div className='flex flex-col items-center mt-[60px] sm:mt-[41px] sm:flex-row sm:justify-between'>
            <img className='mb-[80px] sm:mb-0' src="/icons/celo.svg" alt="believer" />
            <img className='mb-[80px] sm:mb-0' src="/icons/spirals.svg" alt="believer" />
            <img className='mb-[80px] sm:mb-0' src="/icons/moola.svg" alt="believer" />
            <img className='mb-[80px] sm:mb-0' src="/icons/cyberbox.svg" alt="believer" />
            <img src="/icons/valora.svg" alt="believer" />
          </div>
        </div>
        </div>
    </section>
  )
}
