import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='heading'>
            <h1>PREETY GAL</h1>
        </div>
        <div className='footer-mid'>
            <h2>OUR STORE</h2>
            <a href='#'>Shop</a>
            <a href='#'>Sale</a>
            <a href='#'>Customer Care</a>
            <a href='#'>Stores</a>
        </div>
        <div>
            <h2>NEED ASSISTANCE?</h2>
            <p>123-456-7890</p>
            <p>info@mysite.com</p>
        </div>
      </div>
      <div className='middle-part'>
        <h2>TERMS & CONDITIONS</h2>
        <a href='#'>Terms & Conditions</a>
        <a href='#'>Privacy Policy</a>
        <a href='#'>Shipping Policy</a>
        <a href='#'>Refund Policy</a>
      </div>
    </div>
  )
}

export default Footer
