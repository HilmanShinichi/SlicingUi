import React, { useState } from "react";
import "./DetailOrderComp.css";

const DetailOrderComp = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="div4">
      <div className="h-20 pt-7 pl-8">
        <p className="font-bold">Detail Order</p>
      </div>
      <div class="flex ml-8 mr-8">
        <div class="basis-1/3 halu">
      
          <button
            className={activeTab === 1 ? "active" : ""}
            onClick={() => handleTabClick(1)}
          >
            <span className="text-sm font-bold">Items</span>
          </button>
        </div>
        <div class="basis-1/3 halu">
          <button
            className={activeTab === 2 ? "active" : ""}
            onClick={() => handleTabClick(2)}
          >
            <span className="text-sm font-bold">Progress</span>
          </button>
        </div>
        <div class="basis-1/3 halu">
          <button
            className={activeTab === 3 ? "active" : ""}
            onClick={() => handleTabClick(3)}
          >
            <span className="text-sm font-bold">Review</span>
          </button>
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 1 && (
          <>
          <div class="flex flex-row ml-[35px] h-[50px] mt-3">
            <div class="basis-1/7 w-[60px] detail1 "></div>
            <div class="basis-1/2 ">
              <p className="font-medium text-sm ml-2">Fresh Salad Bowl</p>
              <p className="font-normal text-xs ml-2 text-[grey]">
                Extra sweet corn
              </p>
            </div>
            <div class="basis-1/4">
              <p className="font-bold text-sm">2 Items</p>
            </div>
          </div>

          <div class="flex flex-row ml-[35px] h-[50px] mt-3">
            <div class="basis-1/7 w-[60px] detail2 "></div>
            <div class="basis-1/2 ">
              <p className="font-medium text-sm ml-2">Fresh Salad Bowl</p>
              <p className="font-normal text-xs ml-2 text-[grey]">
                Extra sweet corn
              </p>
            </div>
            <div class="basis-1/4">
              <p className="font-bold text-sm">2 Items</p>
            </div>
          </div>
          </>
          
        )}
        {activeTab === 2 && <p>Ini Progress</p>}
        {activeTab === 3 && <p>Ini Review</p>}
      </div>
    </div>
  );
};

export default DetailOrderComp;
