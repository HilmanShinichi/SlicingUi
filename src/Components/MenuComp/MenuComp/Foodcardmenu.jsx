import React, { useState, useEffect } from "react";
import axios from "axios"

const Foodcardmenu = () => {
  //memanggil api
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    getCarts();
  }, []);

  const getCarts = async() => {
    const response = await axios.get('https://dummyjson.com/carts');
    setCarts(response.data.carts)
    console.log(response.data.carts)
  }
  return (
    <div className="foodcardmenu gap-5">
     {
      carts && carts.map( cart => {
        return(
          <div key={ cart.id }>

            <strong>{ cart.total}</strong><br/>
            { cart.totalProducts }<br /><br />
           
           
            {cart.products && cart.products.map(data => {
              return(
                <div key={ data.id }>
                  -- {data.title} --
                </div>

              )
            })} 
            </div>

            
        )
      })
     }
    </div>
  )
}

export default Foodcardmenu


{/* <div className='w-[200px] bg-[red] h-[250px]'>
        <div className='bg-[purple] w-250px h-[150px]'>
        </div>
        <div>
          <p>Restaurant Name</p>
          <p>Quantity : 3</p>
          <p>Diskon Presentasi : 8.71</p>
          <p>Diskon Price : 55</p>
        </div>
      </div> */}