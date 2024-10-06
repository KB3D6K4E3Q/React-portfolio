import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from '../components/BackgroundCircles';

type Props = {};

export default function Hero ({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The name is Ondrej Zubek",
      "Guy-who-loves-Challange.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='h-[90vh] bg-zinc-800 flex flex-col space-y-8 items-center 
    justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <img
      className='relative rounded-full h-32 w-32 mx-auto'
       src='Logo.svg' alt=''/>

       <div>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px] z-20'
        >Web&App Developer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor="#F7AB0A"/>
        </h1>

      </div>
    </div>
  )
}