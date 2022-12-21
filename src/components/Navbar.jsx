import React from 'react'
import './css/Navbar.sass'
import logo from './css/resources/logo3.png'
import book from './css/resources/svg/book.svg'
import code from './css/resources/svg/code.svg'
import document from './css/resources/svg/document.svg'
import email from './css/resources/svg/email.svg'
import file from './css/resources/svg/file.svg'

const Nav = () => {
  return (
    <div className="appbar">
      {/* <a className="button" href="window"><img className="logo" src={logo} alt="" /></a> */}
      <div className="flex">
          <button><img src={book} alt="" /></button>
          <button><img src={code} alt="" /></button>
          <button><img src={document} alt="" /></button>
          <button><img src={email} alt="" /></button>
          <button><img src={file} alt="" /></button>
      </div>
    </div>
  )
}

export default Nav