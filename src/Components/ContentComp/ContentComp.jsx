import React from "react";
import './ContentComp.css'
import { BsChevronCompactDown, BsFillCartFill, BsStar } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { MdVerified } from "react-icons/md";
const ContentComp = () => {
  return (
    <div class="div2 bungkus">
      <div class="flex  items-center mt-5 ">
  <div class="basis-1/2">
  <span  className="text-xl font-bold">Healthy Salad<BsChevronCompactDown className="inline ml-2"/></span>
  <div><HiHome className="inline mr-2"/><span className="inline text-sm text-[grey]">Main Street no.12</span>
  <MdVerified className="inline ml-2"/><span className="text-sm text-[grey] ml-2" >Verified Account</span>
  </div>
  </div>
  <div class="basis-1/7 bg-[#009FBD] h-[50px] w-[70px] flex justify-center items-center rounded-2xl ml-2">
    <img src="https://cdn-user-icons.flaticon.com/98670/98670484/1681103452682.svg?token=exp=1681104351~hmac=565db557176db6944953e071abf09817" className="h-[50px] w-[30px]"/>
  </div>
  <div class="basis-1/4 ml-2">
    <p className="text-xs text-[grey]">Food Delivered</p>
    <p className="font-bold">26.450</p>
  </div>
  <div class="basis-1/7 bg-[#03C988] h-[50px] w-[70px] flex justify-center items-center rounded-2xl ml-2">
    <img src="https://cdn-user-icons.flaticon.com/98670/98670484/1681103314487.svg?token=exp=1681104282~hmac=08c5059615f2ae0fc8d75a76d6f4b122" className="h-[50px] w-[30px]"/>
  </div>
  <div class="basis-1/4 ml-2">
    <p className="text-xs text-[grey]">Satisfaction</p>
    <p className="font-bold">95%</p>
  </div>
  <div class="basis-1/7 bg-[yellow] h-[50px] w-[70px] flex justify-center items-center rounded-2xl ml-2">
    <img src="https://cdn-user-icons.flaticon.com/98670/98670484/1681103688477.svg?token=exp=1681104587~hmac=0b2b5e8f9984383e5f012d8c56daa52a" className="h-[50px] w-[30px]"/>
  </div>
  <div class="basis-1/6 ml-1">
    <p className="text-xs text-[grey]">Your Balance</p>
    <p className="font-bold">IDR 2.560.800</p>
  </div>
  <div class="basis-1/7 ml-1">
    <div className="mb-[30px]">
<a  href="" className="font-bold text-4xl text-[grey]">...</a>
</div>
  </div>
</div>
    </div>
  );
};

export default ContentComp;
