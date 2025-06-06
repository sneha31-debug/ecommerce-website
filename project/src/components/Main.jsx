import React from 'react'
import './Main.css'
const Main = () => {
  return (
    <div className='main'>
      <div className='heading'>
        <h1>OUR BEST SELLERS</h1>
        <p>Don't Miss Out</p>
      </div>
      <div className='img'>
        <div className='img1'>
            <span>BEST SELLER</span>
            <p>Price: $ 15.99</p>
        </div>
        <div className='img2'>
            <span>BEST SELLER</span>
            <p>Price: $ 14.99</p>
        </div>
        <div className='img3'>
            <span>BEST SELLER</span>
            <p>Price: $ 14.99</p>
        </div>
      </div>
    <div className='button'>
        <button>Show Best Sellers</button>
    </div>
    </div>
  )
}

export default Main
