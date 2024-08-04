import { assets } from '@/Assets/assets'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div>
      <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
        <Image src={assets.logo_light} alt='' width={120}/>
        <p className='text-sm text-white'>All right reserved. Copyright @imaz</p>
        <div className='flex'>
            <Image src={assets.facebook_icon} width={40}/>
            <Image src={assets.twitter_icon} width={40}/>
            <Image src={assets.googleplus_icon} width={40}/>
        </div>

      </div>
    </div>
  )
}

export default Footer
