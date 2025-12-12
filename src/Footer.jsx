import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa6'
import { MdOutlineEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <div id='Contact' className='flex justify-around bg-black text-white p-10 md:p-12 items-center'>
      <div>
        <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
        <h3 className='text-sm md:text-2xl font-normal'>Feel free to reach out!</h3>
      </div>
<ul>
<li className='flex gap-3 items-center'><MdOutlineEmail size={20}/>
   zainutaibu@gmail.com
</li>

<li className='flex gap-3 items-center'> <CiLinkedin/>
linkedin.com/zainab
</li>

<li className='flex gap-3 items-center'><FaGithub/>
github.com/zainab
</li>


</ul>
    </div>
  )
}

export default Footer
