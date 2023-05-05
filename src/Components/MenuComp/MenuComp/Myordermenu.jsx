import React, { useState } from "react";

import { BsTrash } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";


const Cardorder = (props) => {
  //state digunakan untuk count
  const [count, setCount] = useState(1);
  const handleIncrement = () => setCount(count + 1);

  const handleDecrement = () => {
    if (count === 1) return 1;

    setCount(count - 1);
  };

 
  return (
    <div class="flex flex-row">
      <div class="basis-1/3 pb-4">
        <img className="rounded-lg" src={props.image} alt="" />
      </div>
      <div class="basis-1/2 pl-3">
        <div>
          <h3>{props.title}</h3>
        </div>
        <div className="border-solid border-2 w-[100px] flex justify-center items-center rounded-lg">
          <button onClick={handleDecrement}><AiOutlineMinus/></button>
          <span className="pl-5 pr-5">{count}</span>
          <button onClick={handleIncrement}><AiOutlinePlus/></button>
        </div>
      </div>
      <div class="basis-1/1">
        <div>
          <h3>{props.price}</h3>
        </div>
        <div className="ml-9 pt-4">
          <BsTrash />
        </div>
      </div>
    </div>
  );
};

const Myordermenu = () => {
  return (
    <div class="myordermenu pl-6 bg-[#F6F1E9]">
      <div>
        <h2 className="font-bold pt-2 pb-3">My Order</h2>
      </div>
      <Cardorder
        image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        title="Sushi Set A"
        price="$79.99"
      ></Cardorder>

      <Cardorder
        image="https://img.freepik.com/free-photo/composition-traditional-indonesian-bakso_23-2148933293.jpg?w=740&t=st=1681366166~exp=1681366766~hmac=6723236c573a272ab73c124c83c87a2d958a295b12713137d7283e74455d1de6"
        title="Bakso"
        price="$29.99"
      ></Cardorder>

<Cardorder
        image="https://img.freepik.com/free-photo/delicious-healthy-asian-food-gray-textured-background-with-copy-space_24972-1024.jpg?t=st=1681365830~exp=1681366430~hmac=dfec3fb489462c66396cb0d35ff8c64188130403ea086661e5393c28b5ede5d6"
        title="Healty Food"
        price="$39.99"
      ></Cardorder>

<Cardorder
        image="https://img.freepik.com/free-photo/top-view-food-frame-with-copy-space_23-2148723447.jpg?w=740&t=st=1681366089~exp=1681366689~hmac=1b6007a54470e09b58e4ef3d00ea8ff5894840a04a5c401cd99250ce6aeed661"
        title="Crazy Rice"
        price="$49.99"
      ></Cardorder>

<div className="bg-[#B6E2A1] w-[350px] h-[70px] flex justify-center items-center border-solid border-2 rounded-lg">
<p className="text-[#54B435] font-semibold">You Have 3 Coupon &nbsp; </p>
<div className="bg-[#54B435] w-[90px] p-2 rounded-lg">
<button className=""><span className="text-white font-semibold">Use Now</span></button>
</div>

      </div>
    </div>

    
  );
};

export default Myordermenu;
