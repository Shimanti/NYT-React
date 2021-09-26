import React from 'react'

const Header = () => {
  return (
    <header>
      <h1>Welcome to the NYT Bestsellers List</h1>
      <p>As of: <span>{new Date().toLocaleString()}</span></p>
    </header>
  )
}

export default Header

