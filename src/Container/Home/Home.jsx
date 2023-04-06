import React from "react";
import "./Home.css";
import HeaderComp from "../../Components/HeaderComp/HeaderComp";
import SidebarComp from "../../Components/SidebarComp/SidebarComp";

const Home = () => {
  return (
    <>
      <HeaderComp />
      <div class="parent">
        <SidebarComp />
        <div class="div2">CONTENT</div>
        <div class="div3">TABEL</div>
        <div class="div4">DETAIL ORDER</div>
      </div>
    </>
  );
};

export default Home;
