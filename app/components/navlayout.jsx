
import React from 'react'
import Navbar  from './navbar';
function navlayout({children}) {
  return (
    <div>
        <Navbar/>
        {children}    
    </div>
  )
}

export default navlayout