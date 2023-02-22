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
          <p className="text-[10px] sm:text-xl text-greylish font-normal text-center px-[6px] max-w-[321px] sm:max-w-none mx-auto sm:mx-0 sm:text-left mb-7 sm:mb-8 leading-[12px] sm:leading-[24px]">
            Easily connect your wallets, onboard contributors, run <span className="mr-1">payroll,</span> do
            budgeting & bookkeeping, monitor your financial data with live
            reporting and make investments in DeFi while <span className="mr-1">mitigating</span> risks with
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
        <div className="sm:w-1/2 flex justify-center pl-[12px] sm:px-0">
          <img
          className="hidden sm:inline"
            src="/icons/dashboard.svg"
            alt="dashboard"
          />
          <img
            className="sm:hidden"
            src="/icons/dashboard-mob.png"
            alt="dashboard"
            style={{filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.18))'}}
          />
        </div>
      </div>
    </section>
  );
};
