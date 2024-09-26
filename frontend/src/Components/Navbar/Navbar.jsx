import React from 'react'
import "./Navbar.css"

export const Navbar = () => {
  return (
    <div>
        <nav className='navbar navbar-light  bg-primary'>
            <h4>LIGER GYM MANEGMENT SYSTEM</h4>
            <div >
              <p className='welcome'>Wel come</p> 
              <p className='Admin'>Admin</p>
            </div>
            
        </nav> 
    </div>
  )
}
