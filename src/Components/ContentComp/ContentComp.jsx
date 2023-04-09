import React from "react";
import { BsChevronCompactDown, BsFillCartFill } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { MdVerified } from "react-icons/md";
const ContentComp = () => {
  return (
    <div class="div2">
      <div className="bg-[pink] mt-5">
        <div className="w-[280px] h-20 bg-[pink] inline-block mt-[50px]">
          <div class="flex flex-col">
            <div className="bg-white mb-5">
              <span className="font-bold">
                Healthy Salad
                <BsChevronCompactDown className="inline ml-4" />
              </span>
            </div>
            <div>
              <HiHome className="inline" />
              <span className="inline text-sm ml-1 text-[#A3C7D6]">
                Main Street No.12
              </span>
              <MdVerified className="inline ml-2" />
              <span className="inline text-sm ml-1 text-[#A3C7D6]">
                Verified Account
              </span>
            </div>
          </div>
        </div>
        <div className="inline-block ml-2"> 
        <div class="flex flex-row ...">
  <div className="bg-[#5F9DF7] w-20 h-20 rounded-3xl">.
    <BsFillCartFill className="h-10 w-10 ml-5"/>
  </div>
  <div className="ml-3">
    <p className="inline text-sm text-[#A3C7D6]">Food Delivered</p>
    <p className="font-extrabold">26.450</p>
  </div>
  <div>03</div>
</div>
</div>
      </div>
    </div>
  );
};

export default ContentComp;
