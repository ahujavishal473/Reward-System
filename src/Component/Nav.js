import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav>
        <ul>
            <Link to='/login'>
            <li>Login</li>
            </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
