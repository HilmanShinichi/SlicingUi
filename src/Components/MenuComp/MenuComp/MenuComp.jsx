import React from 'react'
import './MenuComp.css'
import HeaderComp from '../../HeaderComp/HeaderComp';
import Headmenu from './Headmenu';
import Carosoulmenu from './Carosoulmenu';
import Foodcardmenu from './Foodcardmenu';
import Myordermenu from './Myordermenu';
import Checkoutmenu from './Checkoutmenu';

const MenuComp = () => {
  return (
    <>
    <HeaderComp/>
    <div class="parentmenu">
        <Headmenu/>
        <Carosoulmenu/>
        <Foodcardmenu/>
        <Myordermenu/>
        <Checkoutmenu/>
        
        
        
    </div>
    </>
  )
}

export default MenuComp;
