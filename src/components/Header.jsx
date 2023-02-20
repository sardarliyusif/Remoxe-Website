import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { Button } from "./shared/Button";

export const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className={` sm:py-[22px] pl-[14px] sm:px-[4.75rem] border-b mb-[54px] sm:mb-[110px] border-iconLight  ${isOpen ? 'bg-white' : ''}`}>
      <div className="flex justify-between items-center max-w-[1280px] my-0 mx-auto">
        <div className="logo">
          <img
            src="/icons/logo.svg"
            alt="logo"
            className="h-[20px] sm:h-[40px]"
          />
        </div>
        <nav className="sm:flex items-center hidden ">
          <a href="https://twitter.com/useremox" target="_blank" rel="noreferrer">
            <FaTwitter className="text-iconLight w-[30px] h-[30px] hover:text-[#1DA1F2] cursor-pointer" />
          </a>
          <a
            href="https://discord.com/invite/2r4hrNEbWn"
            target="_blank" rel="noreferrer"
            className="mx-8"
          >
            <FaDiscord className="text-iconLight w-[30px] h-[30px] hover:text-[#7289da] cursor-pointer" />
          </a>
          <Button
            content="Enter App"
            size="small"
            link="https://app.remox.io/"
            bg="primary"
          />
        </nav>
        <div className="hamburger-icon sm:hidden">
          <Hamburger size={15} toggled={isOpen} toggle={setOpen} />
        </div>
        {isOpen && <div className="sm:hidden absolute top-12 left-0 px-[14px] py-8 w-full flex flex-col bg-white border-t ">
          <div className="flex mx-auto">
            <a href="https://twitter.com/useremox" target="_blank" rel="noreferrer">
              <FaTwitter className="text-iconLight w-[30px] h-[30px] hover:text-[#1DA1F2] cursor-pointer" />
            </a>
            <a
              href="https://discord.com/invite/2r4hrNEbWn"
              target="_blank" rel="noreferrer"
              className="mx-8"
            >
              <FaDiscord className="text-iconLight w-[30px] h-[30px] hover:text-[#7289da] cursor-pointer" />
            </a>
          </div>
          <Button
            content="Enter App"
            link="https://app.remox.io/"
            classes='h-[40px] w-full mt-8'
            bg='primary'
          />
        </div>}
      </div>
    </header>
  );
};
