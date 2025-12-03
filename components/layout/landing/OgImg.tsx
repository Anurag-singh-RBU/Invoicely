import Image from 'next/image'
import React from 'react'

const OgImg = () => {
  return (
    <div className='flex flex-col border-b border-dashed p-4 w-full'>
        <div className="relative">

        <Image
            src="/hero.png"
            alt="Hero Image"
            height={1080}
            width={1920}
            className="inset-0 rounded-lg mask-r-from-95% mask-l-from-97% mask-b-from-90% mask-t-from-95% dark:hidden"/>

        <Image
            src="/hero-dark.png"
            alt="Hero Image Dark"
            height={1080}
            width={1920}
            className="inset-0 rounded-lg hidden dark:block"/>
            
        </div>

    </div>
  )
}

export default OgImg