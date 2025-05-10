import React from 'react'

function project({ head ,img,link,desc}) {
  return (
    <div className='border-2 border-green-900 rounded-2xl p-5 mt-10 bg-green-900 text-white pt-5 w-fit'>
        <h1 className='text-4xl font-bold text-center '>{head}</h1>
        <img src={img} className='rounded-2xl my-5 text-center lg:h-1/2 lg:w-1/2 mx-auto' alt="project" />
        <p className='text-xl'>{desc}</p>
        <a href={link}><button className='bg-white text-green-900 p-2 rounded-xl text-xl mt-4 '>Github</button></a>

    </div>
  )
}

export default project