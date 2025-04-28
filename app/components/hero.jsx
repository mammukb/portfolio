import React from 'react'
import Image from 'next/image'

function hero() {
  return (
    <div>
        <Image src="/hero.png" alt="hero" width={300} height={300} className='rounded-2xl' loading='lazy'/>
    </div>
  )
}

export default hero