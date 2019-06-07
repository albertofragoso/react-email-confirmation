import React from 'react'
import { Navbar } from 'react-bootstrap'

const Nav = () => (
  <Navbar bg="dark" variant="dark" className="mb-5">
    <Navbar.Brand href="/">
        <span role="img" arial-label="email">📬</span> React Mailer
    </Navbar.Brand>
  </Navbar>
)

export default Nav