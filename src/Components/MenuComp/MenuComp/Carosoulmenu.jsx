import React, { useState } from 'react';
import { BsChevronCompactUp, BsChevronCompactDown } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const Carosoulmenu = () => {
  const slides = [
    {
      url:
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      url:
        'https://img.freepik.com/free-photo/delicious-healthy-asian-food-black-textured-background-with-copy-space_24972-1019.jpg?t=st=1681365830~exp=1681366430~hmac=6d3e62c3c41d83a7d8a1c7f01df5d49464f36769b451b40ef61019ec7c7f83d0',
    },
    {
      url:
        'https://img.freepik.com/free-photo/delicious-healthy-asian-food-gray-textured-background-with-copy-space_24972-1024.jpg?t=st=1681365830~exp=1681366430~hmac=dfec3fb489462c66396cb0d35ff8c64188130403ea086661e5393c28b5ede5d6',
    },
    {
      url:
        'https://img.freepik.com/free-photo/top-view-food-frame-with-copy-space_23-2148723447.jpg?w=740&t=st=1681366089~exp=1681366689~hmac=1b6007a54470e09b58e4ef3d00ea8ff5894840a04a5c401cd99250ce6aeed661',
    },
    {
      url:
        'https://img.freepik.com/free-photo/composition-traditional-indonesian-bakso_23-2148933293.jpg?w=740&t=st=1681366166~exp=1681366766~hmac=6723236c573a272ab73c124c83c87a2d958a295b12713137d7283e74455d1de6',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('horizontal'); // State untuk mengatur arah slider (horizontal/vertikal)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };


  return (
    <div class="carosoulmenu">
        <div className="max-w-[1400px] h-[490px] w-full m-auto py-16 px-10 relative group">
        <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-full rounded-2xl bg-center bg-hover duration-500 ulil"></div>
        {/* Up Arrow */}
        <div className='hidden group-hover:block absolute top-[10%] right-[46%] -translate-x-0 translate-y-[-20%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactUp onClick={prevSlide} size={30}/>
        </div>
        {/* Down Arrow */}
        <div className='hidden group-hover:block absolute top-[82%] right-[45%] -translate-x-0 translate-x-[-20%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactDown onClick={nextSlide} size={30}/>
        </div>
        <div className=' absolute top-[50%] right-[1%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2  cursor-pointer'>
        <ul>
            {slides.map((slide, slideIndex) => (
                 
                  
                    <li key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'><RxDotFilled/></li>
                   
               
            ))}
        </ul>
        </div>
        </div>
    </div>
  )
}

export default Carosoulmenu;
