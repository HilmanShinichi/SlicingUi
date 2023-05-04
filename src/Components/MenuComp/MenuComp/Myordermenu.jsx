import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";

const Cardorder = (props) => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);

  const handleDecrement = () => {
    if (count === 1) return 1;

    setCount(count - 1);
  };
  return (
    <div class="flex flex-row">
      <div class="basis-1/3 pb-4">
        <img
          className="rounded-lg"
          src={props.image}
          alt=""
        />
      </div>
      <div class="basis-1/2 pl-3">
        <div>
          <h3>{props.title}</h3>
        </div>
        <div className="">
          <button onClick={handleDecrement}>-</button>
          <span className="pl-5 pr-5">{count}</span>
          <button onClick={handleIncrement}>+</button>
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
    <div class="myordermenu pl-4">
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
    </div>
  );
};

export default Myordermenu;
