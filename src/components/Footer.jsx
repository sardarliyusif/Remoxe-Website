import React from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="px-4">
      <div className="max-w-[1280px] my-0 mx-auto flex justify-between items-center pb-[22px] sm:pb-10 border-b border-iconLight">
        <img className="h-[20px] sm:h-[40px]" src="/icons/logo.svg" alt="logo" />
        <ul className="flex text-[10px] sm:text-base font-semibold">
          <li className="hover:text-[#707070]">
            <a href="#">Home</a>
          </li>
          <li className="mx-5 sm:mx-[60px] hover:text-[#2e2e2e]">
            <a href="https://medium.com/remoxhq" target='_blank'>Blog</a>
          </li>
          <li className="hover:text-[#2e2e2e]">
            <a href="https://demo.remox.io/" target='_blank'>Demo</a>
          </li>
        </ul>
        <ul className="flex items-center">
          <li>
            <a href="https://twitter.com/useremox" target="_blank">
              <FaTwitter className="text-iconLight w-[16px] h-[16px] sm:w-[30px] sm:h-[30px] hover:text-[#1DA1F2] cursor-pointer" />
            </a>
          </li>
          <li>
            <a
              href="https://discord.com/invite/2r4hrNEbWn"
              target="_blank"
              className="mx-8"
            >
              <FaDiscord className="text-iconLight w-[16px] h-[16px] sm:w-[30px] sm:h-[30px] ml-5 sm:ml-8 hover:text-[#7289da] cursor-pointer" />
            </a>
          </li>
        </ul>
      </div>
      <p className="text-center my-4 text-[10px] sm:text-base text-greylish font-semibold">© 2023 Remox, Inc.</p>
    </footer>
  );
};
