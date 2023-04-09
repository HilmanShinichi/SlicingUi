import React from "react";
import "./SidebarComp.css";
import { BsFileBarGraphFill, BsFillExclamationSquareFill, BsCreditCardFill, BsFillFileTextFill, BsChatDotsFill } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";

const SidebarComp = () => {
  return (
    <div class="div1">
      <div className="w-[290px] m-auto h-[200px]">
        <img className="w-[290px] h-[200px]" src="https://www.visitsingapore.com/id_id/dining-drinks-singapore/local-dishes/rojak/_jcr_content/par-carousel/carousel_detailpage/carousel/item_1.thumbnail.carousel-img.740.416.jpg" alt="" />
      </div>
      <div className="ml-[110px]">
        <span className="text-[#6B728E]">MENU</span>
        </div>
       <div class="flex flex-col justify-center items-center mt-5">
        <div className="">
          <div class="flex flex-row mr-2">
            <div class="basis-1/4  ">
              <BsFileBarGraphFill className="w-10 h-[25px]" />
            </div>
            <div class="basis-1/4 ml-2">
              <a href="">Home</a>
            </div>
          </div>
        </div>
        <div>
          <div class="flex flex-row mt-5 mr-3">
            <div class="basis-1/4  ">
              <HiShoppingCart className="w-10 h-[25px]" />
            </div>
            <div class="basis-1/4 ml-2">
              <a href="">Order</a>
            </div>
          </div>
        </div>
        <div>
        <div class="flex flex-row mt-5 mr-4">
            <div class="basis-1/4  ">
              <BsFillFileTextFill className="w-10 h-[25px]" />
            </div>
            <div class="basis-1/4 ml-2">
              <a href="">Menu</a>
            </div>
          </div>
        </div>
        <div>
        <div class="flex flex-row mt-5 mr-1">
            <div class="basis-1/4  ">
              <BsChatDotsFill className="w-10 h-[25px]" />
            </div>
            <div class="basis-1/4 ml-2">
              <a href="">Review</a>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-[106px] mt-8"><span className="text-[#6B728E]">
        OTHERS
      </span>
        </div>
       <div class="flex flex-col justify-center items-center mt-5">
        <div className="">
          <div class="flex flex-row">
            <div class="basis-1/4 ">
              <AiFillSetting className="w-10 h-[25px]" />
            </div>
            <div class="basis-1/4 ml-2">
              <a href="">Settings</a>
            </div>
          </div>
        </div>
        <div>
          <div class="flex flex-row mt-5 ml-3">
            <div class="basis-1/4  ">
              <BsCreditCardFill className="w-10 h-[25px]" />
            </div>
            <div class="basis-1/4 ml-2">
              <a href="">Payments</a>
            </div>
          </div>
        </div>
        <div>
        <div class="flex flex-row mt-5 ml-2">
            <div class="basis-1/4  ">
              <MdAccountCircle className="w-10 h-[25px]" />
            </div>
            <div class="basis-1/4 ml-2">
              <a href="">Accounts</a>
              </div>
          </div>
        </div>
        <div>
        <div class="flex flex-row mt-5 mr-8">
            <div class="basis-1/4  ">
              <BsFillExclamationSquareFill className="w-10 h-[25px]" />
            </div>
            <div class="basis-1/4 ml-2">
              <a href="">Help</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SidebarComp;
