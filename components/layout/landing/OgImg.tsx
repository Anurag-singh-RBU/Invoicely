import Image from 'next/image'
import React from 'react'

const OgImg = () => {
  return (
    <div className='flex flex-col border-b border-dashed sm:p-4 p-0 dark:py-0 dark:px-4 w-full'>
        <div className="relative">

        <Image
            src="/hero.png"
            alt="Hero Image"
            height={1080}
            width={1920}
            className="inset-0 sm:rounded-lg sm:mask-r-from-95% sm:mask-l-from-97% sm:mask-b-from-90% sm:mask-t-from-95% mask-none rounded-none dark:hidden"/>

        <Image
            src="/hero-dark.png"
            alt="Hero Image Dark"
            height={1080}
            width={1920}
            className="inset-0 hidden dark:block"/>
            
        </div>

    </div>
  )
}

export default OgImg