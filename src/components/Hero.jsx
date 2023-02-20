import React from "react";
import { Button } from "./shared/Button";

export const Hero = () => {
  return (
    <section className="px-[14px] sm:px-[4.75rem]">
      <div className="max-w-[1280px] my-0 mx-auto sm:flex">
        <div className="sm:w-1/2 sm:pr-3">
          <h2 className="text-3xl sm:text-[56px] font-semibold pl-7 sm:pl-0 mb-5 sm:mb-9">
            Treasury Management, Simplified.
          </h2>
          <p className="text-[10px] sm:text-xl text-greylish font-normal text-center px-[6px] sm:text-left mb-7 sm:mb-8 leading-[24px]">
            Easily connect your wallets, onboard contributors, run payroll, do
            budgeting & bookkeeping, monitor your financial data with live
            reporting and make investments in DeFi while mitigating risks with
            dynamic risk assessments.
          </p>
          <div className="flex justify-center sm:justify-start mb-8 sm:mb-5">
            <Button
              content="Connect wallet"
              size="medium"
              link="https://app.remox.io/"
              bg="primary"
              classes="hidden sm:inline mr-[24px]"
            />
            <Button
              content="View demo"
              size="view"
              link="https://demo.remox.io/"
              classes="hidden sm:inline"
            />
            <Button
              content="Connect wallet"
              size="mobile-small"
              link="https://app.remox.io/"
              bg="primary"
              classes="sm:hidden mr-[18px]"
            />
            <Button
              content="View demo"
              size="mobile-view"
              link="https://demo.remox.io/"
              classes="sm:hidden"
            />
          </div>
        </div>
        <div className="sm:w-1/2 flex justify-center">
          <img
            src="/icons/dashboard.svg"
            alt="dashboard"
            // className="w-[314px] sm:w-[628px]"
          />
        </div>
      </div>
    </section>
  );
};
