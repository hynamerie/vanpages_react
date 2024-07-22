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
          to="income"
          style={({isActive}) => isActive ? activeStyles : null}
        >Income</NavLink>
        <NavLink 
          to="vans"
          style={({isActive}) => isActive ? activeStyles : null}
        >Vans</NavLink>
        <NavLink 
          to="reviews"
          style={({isActive}) => isActive ? activeStyles : null}
        >Reviews</NavLink>

      </nav>
      <Outlet/>
    </div>
  )
}

export default HostLayout