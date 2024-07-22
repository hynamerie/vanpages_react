import React from 'react'
import { Outlet } from 'react-router-dom'

const HostLayout = () => {
  return (
    <div>
      <nav className='host-nav'>
      <Link to="/host">Dashboard</Link>
      <Link to="/host/income">Income</Link>
      <Link to="/host/reviews">Reviews</Link>
      </nav>
      <Outlet/>
    </div>
  )
}

export default HostLayout