import React, {useState, useEffect} from "react";
import './TabelComp.css'
import axios from "axios"
import { AiFillFilter } from 'react-icons/ai';


const TabelComp = () => {
const [users, setUser] = useState([]);

useEffect(() => {
    getUsers();
}, []);


    const getUsers = async() => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUser(response.data)
    }


  return (
    <div class="div3">
      <div class="flex flex-row mt-[20px]">
  <div class="basis-1/2">
    <p className="font-bold ">Food Order</p></div>
  <div class="btnfilter ml-[230px]">
  <button class="rounded-none "><AiFillFilter className="inline mr-2"/>Filter Order</button>
  </div>
</div>

      
        <div class="container mx-auto px-4 sm:px-2">
          <div class="py-2">
            <div class="my-2 flex sm:flex-row flex-col">
              <div class="flex flex-row mb-1 sm:mb-0">
              </div>
            </div>
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table class="min-w-full leading-normal table">
                  <thead>
                    <tr>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold   tracking-wider">
                        Customer
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold  tracking-wider">
                        Address
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold  tracking-wider">
                        Website
                      </th>
                      <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-bold  tracking-wider">
                        Phone
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (

                    <tr className="a" key={user.id}>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 w-10 h-10">
                            <img
                              class="w-full h-full rounded-full"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                              alt=""
                            />
                          </div>
                          <div class="ml-3">
                            <p class="text-gray-900 whitespace-no-wrap">
                              {user.name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">{user.address.street}</p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {user.website}
                        </p>
                      </td>
                      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden
                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span class="relative">{user.phone}</span>
                        </span>
                      </td>
                    </tr>
                     ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default TabelComp;
