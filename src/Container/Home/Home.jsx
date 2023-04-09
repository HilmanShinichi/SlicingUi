import React from "react";
import "./Home.css";
import HeaderComp from "../../Components/HeaderComp/HeaderComp";
import SidebarComp from "../../Components/SidebarComp/SidebarComp";
import ContentComp from "../../Components/ContentComp/ContentComp";

const Home = () => {
  return (
    <>
      <HeaderComp />
      <div class="parent">
        <SidebarComp />
        <ContentComp/>
        <div class="div3">TABEL</div>
        <div class="div4">DETAIL ORDER</div>
      </div>
    </>
  );
};

export default Home;
