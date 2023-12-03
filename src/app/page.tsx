
import { Component, useEffect } from "react";

import Image from 'next/image';
import * as Images from '../../public/images';
import React, { useState } from "react";

interface productList1 {
  id: string,
  Name: string,
  description: string,
  Image: any
}

export default function Home() {

  const productList1: productList1[] = [
    {
      id: '1',
      Name: 'Fastract Watch',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet ullam dolore, nulla recusandae amet aspernatur magnam? Labore quae cumque esse hic? At quisquam rerum ratione fugit, tenetur unde! Nisi!",
      Image: Images.branding.Watch
    },
    {
      id: '2',
      Name: 'Piter England Shirt',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet ullam dolore, nulla recusandae amet aspernatur magnam? Labore quae cumque esse hic? At quisquam rerum ratione fugit, tenetur unde! Nisi!",
      Image: Images.branding.Watch
    },
    {
      id: '3',
      Name: 'Piter England Shirt neo',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet ullam dolore, nulla recusandae amet aspernatur magnam? Labore quae cumque esse hic? At quisquam rerum ratione fugit, tenetur unde! Nisi!",
      // Image: Images.branding.Shirt2
      Image: Images.branding.Watch

    },
    {
      id: '4',
      Name: 'Pants',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet ullam dolore, nulla recusandae amet aspernatur magnam? Labore quae cumque esse hic? At quisquam rerum ratione fugit, tenetur unde! Nisi!",
      // Image: Images.branding.Shirt1
      Image: Images.branding.Watch

    },
    {
      id: '5',
      Name: 'Fastract Watch ++',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet ullam dolore, nulla recusandae amet aspernatur magnam? Labore quae cumque esse hic? At quisquam rerum ratione fugit, tenetur unde! Nisi!",
      Image: Images.branding.Watch
    },
    {
      id: '6',
      Name: 'Piter England Shirt office',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet ullam dolore, nulla recusandae amet aspernatur magnam? Labore quae cumque esse hic? At quisquam rerum ratione fugit, tenetur unde! Nisi!",
      // Image: Images.branding.Shirt1
      Image: Images.branding.Watch
    },
    {
      id: '7',
      Name: 'Piter England Shirt summer',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet ullam dolore, nulla recusandae amet aspernatur magnam? Labore quae cumque esse hic? At quisquam rerum ratione fugit, tenetur unde! Nisi!",
      // Image: Images.branding.Shirt2
      Image: Images.branding.Watch
    },
    {
      id: '8',
      Name: 'Night Pant ',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet ullam dolore, nulla recusandae amet aspernatur magnam? Labore quae cumque esse hic? At quisquam rerum ratione fugit, tenetur unde! Nisi!",
      Image: Images.branding.Watch
    },


  ]

  const newYorkCityImg = Images.branding.LandingPage1

  return (
    <>

      <div className='relative w-full md:h-[550px] lg:h-[550px] 2xl:h-[700px] xl:h-[600px] h-[750px] overflow-x-hidden "'>
        <div className='backgroundV3'></div>
        <div className='backgroundV3Gradient'></div>
        <div className='z-50 relative '>
          <div className='font-extrabold text-transparent lg:text-5xl text-3xl py-7 pl-5 flex items-center bg-clip-text bg-gradient-to-r from-red-400 via-blue-500 to-blue-400 ml-3 ' > Play &#62;&#62; Fashion </div>
          <Image src={Images.branding.LandingPage1} alt={''} className='float-right lg:w-[28rem] lg:block hidden -translate-x-20 opacity-85 -translate-y-8 '></Image>

          <div className='text-white lg:w-6/12 p-8 leading-loose tracking-widest'>
            <p className='xl:text-[40px] lg:text-[30px] text-lg font-bold'>Lorem Ipsum Lorem ipSum</p>
            <ul className='xl:text-xl lg:text-base text-sm mt-2 text-gray-400 list-disc ml-5 '>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus corporis dignissimos natus nemo odio eius a deserunt ad impedit itaque.</li>
              <li>Eius exercitationem praesentium nemo magni totam dolorem dolore voluptatem fugit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus corporis dignissimos natus nemo odio eius a deserunt ad impedit itaque.</li>
              <li>Eius exercitationem praesentium nemo magni totam dolorem dolore voluptatem fugit.</li>
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}


