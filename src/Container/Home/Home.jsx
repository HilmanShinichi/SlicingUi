import React from "react";
import "./Home.css";
import HeaderComp from "../../Components/HeaderComp/HeaderComp";
import SidebarComp from "../../Components/SidebarComp/SidebarComp";
import ContentComp from "../../Components/ContentComp/ContentComp";   
import DetailOrderComp from "../../Components/DetailOrderComp/DetailOrderComp";
import TabelComp from "../../Components/TabelComp/TabelComp";

const Home = () => {
  return (
    <>
      <HeaderComp />
      <div class="parent">
        <SidebarComp />
        <ContentComp/>
        <TabelComp/>
        <DetailOrderComp/>
      </div>
    </>
  );
};

export default Home;
