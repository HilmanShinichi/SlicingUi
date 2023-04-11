import React from "react";
import "./SidebarComp.css";
import {
  BsFileBarGraphFill,
  BsFillExclamationSquareFill,
  BsCreditCardFill,
  BsFillFileTextFill,
  BsChatDotsFill,
} from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";

const SidebarComp = () => {
  return (
    <div class="div1">
      <div className="w-[220px] m-auto h-[200px] mieayam">
        {/* <img
          className=" "
          src="https://www.visitsingapore.com/id_id/dining-drinks-singapore/local-dishes/rojak/_jcr_content/par-carousel/carousel_detailpage/carousel/item_1.thumbnail.carousel-img.740.416.jpg"
          alt=""
        /> */}
      </div>
      <div className="ml-[63px]">
        <span className="text-[#6B728E]">MENU</span>
      </div>
      <div class="flex flex-col justify-center items-center">
        <div className="">
          <div class="flex flex-row">

            <div className="inline-block hover1 w-[200px] flex justify-center items-center">
              <div class="basis-1/4 icon1 inline-block pt-3 pb-2 ">
                <BsFileBarGraphFill className="w-10 h-[20px]" />
              </div>
              <div class="basis-1/4 text-bg inline-block pt-3 pb-2 " >
                <a href="" className="">
                  Home
                </a>
              </div>
            </div>

          </div>
        </div>
        <div>
          <div class="flex flex-row">

            <div className="inline-block hover1 w-[200px] flex justify-center items-center">
            <div class="basis-1/4  icon1 inline-block pt-3 pb-2">
              <HiShoppingCart className="w-10 h-[20px]" />
            </div>
            <div class="basis-1/4 ml-2 pt-3 pb-2 text-bg">
              <a href="">Order</a>
            </div>
            </div>

          </div>
        </div>
        <div>
          <div class="flex flex-row ">
            <div className="inline-block hover1 w-[200px] flex justify-center items-center">
            <div class="basis-1/4  icon1 inline-block pt-3 pb-2">
              <BsFillFileTextFill className="w-10 h-[15px]" />
            </div>
            <div class="basis-1/4 ml-2 pt-3 pb-2 text-bg">
              <a href="">Menu</a>
            </div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex flex-row">
            <div className="inline-block hover1 w-[200px] flex justify-center items-center">
            <div class="basis-1/4 icon1 pt-3 pb-2">
              <BsChatDotsFill className="w-10 h-[15px]" />
            </div>
            <div class="basis-1/4 ml-2 pt-3 pb-2 text-bg">
              <a href="">Review</a>
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-[63px] mt-8">
        <span className="text-[#6B728E]">OTHERS</span>
      </div>
      <div class="flex flex-col justify-center items-center">
        <div className="">
          <div class="flex flex-row">
            <div className="inline-block hover1 w-[200px] flex justify-center items-center">
            <div class="basis-1/4 icon1 pt-3 pb-1">
              <AiFillSetting className="w-10 h-[20px]" />
            </div>
            <div class="basis-1/4  pt-3 pb-2 text-bg">
              <a href="">Settings</a>
            </div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex flex-row ml-1">
            <div className="inline-block hover1 w-[200px] flex justify-center items-center">
            <div class="basis-1/4  icon1 pt-3 pb-2 ml-2">
              <BsCreditCardFill className="w-10 h-[15px]" />
            </div>
            <div class="basis-1/4 pt-3 pb-2 text-bg">
              <a href="">Payments</a>
            </div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex flex-row">
            <div className="inline-block hover1 w-[200px] flex justify-center items-center">
            <div class="basis-1/4 ml-2 icon1 pt-3 pb-2">
              <MdAccountCircle className="w-10 h-[20px]" />
            </div>
            <div class="basis-1/4 pt-3 pb-2 text-bg">
              <a href="">Accounts</a>
            </div>
            </div>
          </div>
        </div>
        <div>
          <div class="flex flex-row mr-2">
            <div className="inline-block hover1 w-[200px] flex justify-center items-center">
            <div class="basis-1/4  icon1 pt-3 pb-2">
              <BsFillExclamationSquareFill className="w-10 h-[15px]" />
            </div>
            <div class="basis-1/4 ml-2 pt-3 pb-2 text-bg">
              <a href="">Help</a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SidebarComp;
