import Image from 'next/image'
import React from 'react'

const SkeletonOne = () => {
  return (
    <Image src="/skelone.png" height={600} width={300} alt='skeleton one' className='mx-auto pt-4 mask-r-from-95% mask-l-from-97% mask-b-from-90% mask-t-from-90%'></Image>
  )
}

export default SkeletonOne