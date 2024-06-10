import React from 'react'
import { Link } from 'react-router-dom'
import { IoSearchOutline } from 'react-icons/io5'

const Header = () => {
  return (
    <header className='Header container'>
      <Link to={'/'} className='Logo'>
        Sanctum</Link>
      <nav className='Header__menu'>
        <Link to={'/products'} className='Header__menu-link'>Products</Link>
        <Link to={'/payment-and-delivery'} className='Header__menu-link'>Payment and delivery</Link>
        <Link to={'/about-us'} className='Header__menu-link'>About us</Link>
        <Link to={'/contacts'} className='Header__menu-link'>Contacts</Link>
      </nav>

      <form className='Header__form'>
        <input type="text" className='Header__form-input' />
        <button type='submit' className='Header__form-btn'>{<IoSearchOutline />}</button>
      </form>
      <a href="tel:+998900020202" className='Header__link'>+998 90 002 02 02</a>
      <button type='button'  className='Header__lang'>RU</button>
    </header>
  )
}

export default Header