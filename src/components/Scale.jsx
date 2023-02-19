import React from "react";
import { Button } from "./shared/Button";

export const Scale = () => {
  return (
    <section className="py-[110px]">
      <div className="max-w-[301px] sm:max-w-[1280px] my-0 mx-auto bg-light flex items-center flex-col py-5 px-[23px] sm:py-[94px] rounded-md">
        <p className="text-lg sm:text-[36px] font-semibold">
          Scale up with <span className="text-primary">Remox</span>
        </p>
        <p className="max-w-[255px] text-greylish text-[10px] sm:text-lg font-medium sm:max-w-[458px] mt-[14px] mb-5 sm:my-[33px]">
          Streamlined features allow you to plan, spend, invest, report, and
          manage your DAO treasury in one place.
        </p>
        <Button
          content="Enter App"
          size="large"
          link="https://app.remox.io/"
          bg="primary"
          classes='hidden sm:block'
        />
        <Button
          content="Enter App"
          size="mobile-medium"
          link="https://app.remox.io/"
          bg="primary"
          classes='sm:hidden'
        />
      </div>
    </section>
  );
};
