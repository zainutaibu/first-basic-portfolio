import React from 'react'
import TextChange from './TextChange';


const Home = () => {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20 '>
      <div className='md:w-2/4 md:pt-10'>
      <h1 className='text-7xl md:text-xl font-bold flex leading-normal tracking-tighter text-amber-700'><TextChange/></h1>
      <p className='text-sm md:text-2xl tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button className='mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-blue-600'>Contact me</button>
    </div>
    <div><img className='w-70 h-70 rounded-full' src="mine.jpeg" alt="my image" /></div>

    </div>
  )
}

export default Home;
