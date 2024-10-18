import React from "react";
import {
  HiOutlineBell,
  HiOutlineChatAlt,
  HiOutlineSearch,
} from "react-icons/hi";
// import { Popover } from '@headlessui/react';


export default function header() {
  return (
    <div className="bg-white h-16 w-[80vw] px-4 flex justify-between items-center border-b border-gray-200">
      <div className="relative">
        <HiOutlineSearch
          font={20}
          className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3"
        />
        <input
          type="text"
          placeholder="Search..."
          className="text-sm focus:outline-none active:outline-black h-10 rounded-sm px-4  w-[24rem] border border-gray-300 pl-11 pr-4"
        />
      </div>
      <div className="flex items-center gap-2 pr-2">
        {/* <Popover className="relative">
          {({ open }) => (
            <Popover.Button className="inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-50">
              <HiOutlineChatAlt fontSize={24} />
            </Popover.Button>
          )}
        </Popover> */}
        <HiOutlineChatAlt font={24} />
        <HiOutlineBell font={24} />
      </div>
    </div>
  );
}
