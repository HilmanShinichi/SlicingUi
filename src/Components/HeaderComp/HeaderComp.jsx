import React from "react";
import "./HeaderComp.css";
import { AiOutlineSearch, AiOutlineDown } from "react-icons/ai";

const HeaderComp = () => {
  return (
    <>
      <header>
        <div className="w-full h-[80px] bg-[#03C988]">
          <div className="flex">
            <div class="flex-none w-14 h-14 ml-[100px] mt-[15px]">
              <img
                class="w-[50px] h-[50px]"
                src="https://i.imgur.com/w215ACd.png"
              />
            </div>
            <div className=" w-35 h-[50px] mt-[25px] ml-[10px] justify-center items-center">
              <p className="font-bold text-white">GOODFOOD</p>
            </div>
            {/* Search */}
            <div className="search-bar">
              <input
                type="text"
                class="search-input"
                placeholder="Search everything"
              />
              <button className="search-button">
                {" "}
                <AiOutlineSearch />
              </button>
            </div>

            <div className="flex w-[200px] h-[60px] bg-blac mt-[10px] ml-[300px]">
              <img
                className="w-[50px] h-[50px]"
                src="https://cdn-icons-png.flaticon.com/512/4140/4140061.png"
              />
              <div className="flex justify-center items-center ml-[20px]">
                <span className="text-white font-bold">Samantha</span>
              </div>
              <div className="flex justify-center items-center ml-[20px]">
                <button>
                  <img
                    className="w-4"
                    src="https://i.imgur.com/2gVX3J8.png"
                  ></img>
                </button>
              </div>
              <div></div>
            </div>
            <div className="flex justify-center items-center ml-[50px]">
              <button>
                <img
                  className="w-7"
                  src="https://i.imgur.com/G2jUn0k.png"
                ></img>
              </button>
            </div>
          </div>
        </div>
      </header>


      

    </>
  );
};

export default HeaderComp;
