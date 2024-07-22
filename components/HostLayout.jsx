import React from 'react'
import { Outlet, NavLink, redirect } from 'react-router-dom'

const HostLayout = () => {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#fc8654"
}
  return (
    <div>
      <nav className='host-nav'>
        <NavLink 
          to="."
          end
          style={({isActive}) => isActive ? activeStyles : null}
        >Dashboard</NavLink>
        <NavLink 
          to="vans"
          style={({isActive}) => isActive ? activeStyles : null}
        >Vans</NavLink>

      </nav>
      <Outlet/>
    </div>
  )
}

export default HostLayout