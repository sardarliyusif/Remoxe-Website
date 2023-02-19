import React from "react";

export const Users = () => {
  return (
    <section className="px-4 mt-[171px] sm:mt-[112px] mb-[80px] sm:mb-[160px]">
      <div className="max-w-[1280px] my-0 mx-auto">
        <div className="mb-[62px] sm:mb-[66px] sm:order-1">
          <p className="text-primary text-[10px] sm:text-base font-semibold text-center">
            Users
          </p>
          <p className="font-semibold text-[18px] sm:text-[36px] my-3 sm:my-[26px]  text-center">
            For crypto-native organizations and people
          </p>
          <p className="font-semibold text-[10px] text-greylish sm:text-[18px] text-center">
            Our simplified and collaborative platform makes treasury management
            easier.
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="flex flex-col sm:w-1/3 items-center mb-[100px] sm:mb-0">
            <div>
              <img src="/icons/users1.svg" alt="feature" />
            </div>
            <p className="font-semibold text-2xl mt-[34px] mb-4">
              For DAOs
            </p>
            <p className="text-greylish text-center text-base font-medium max-w-[370px]">
              Share payment link with your DAO community.
            </p>
          </div>
          <div className="flex flex-col sm:w-1/3 items-center mb-[100px] sm:mb-0">
            <div>
              <img src="/icons/users2.svg" alt="feature" />
            </div>
            <p className="font-semibold text-2xl mt-[34px] mb-4">
              For Startups
            </p>
            <p className="text-greylish text-center text-base font-medium max-w-[370px]">
              Share payment link with your DAO community. Manage grant, bug
              bounty, contributor payouts,
            </p>
          </div>
          <div className="flex flex-col sm:w-1/3 items-center">
            <div>
              <img src="/icons/users3.svg" alt="feature" />
            </div>
            <p className="font-semibold text-2xl mt-[34px] mb-4">
              For Individuals
            </p>
            <p className="text-greylish text-center text-base font-medium max-w-[370px]">
              Share payment link with your DAO community. Manage grant, bug
              bounty, contributor payouts,
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
