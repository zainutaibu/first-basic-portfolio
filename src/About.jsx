import React from 'react';
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div id='About' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
      <h2 className='text-2xl md:text-4xl font-bold'></h2>

      <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
        <img className='w-80 h-40 float-left mr-6 mb-4 rounded-lg' src="abouts.avif" alt="zainab" />

        <div className='space-y-6'>

          {/* Frontend Developer */}
          <div className='flex gap-3'>
            <IoArrowForward size={30} className="mt-1" />
            <div>
              <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend Developer</h1>
              <p className='text-sm md:text-md leading-tight'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>

          {/* Database Developer */}
          <div className='flex gap-3'>
            <IoArrowForward size={30} className="mt-1" />
            <div>
              <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Database Developer</h1>
              <p className='text-sm md:text-md leading-tight'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
          </div>

          {/* Backend Developer */}
          <div className='flex gap-3'>
            <IoArrowForward size={30} className="mt-1" />
            <div>
              <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend Developer</h1>
              <p className='text-sm md:text-md leading-tight'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
